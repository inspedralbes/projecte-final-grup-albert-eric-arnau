import { useDispatch, useSelector } from "react-redux";
import { sendMessageAction, receiveMessageAction } from "../redux/actions";
import { loadGroupMessagesThunk } from "../redux/thunk/chat-thunk";

let socket = null;

const useWebSocket = () => {
  const dispatch = useDispatch();
  const { chat } = useSelector((store) => store); // this is the state of the chat reducer
  const { user } = useSelector((store) => store.auth); // this is the state of the user reducer

  function initializeWebsocket() {
    socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_CONNECTION_URL);

    socket.onopen = () => {
      console.log("Connected to server");
      let message = JSON.stringify({
        meta: "connection",
        userID: user.uid,
        username: user.username,
      });
      socket.send(message);
    };

    socket.onmessage = (event) => {
      let { data } = event;
      data = JSON.parse(data);
      const { meta } = data;
      switch (meta) {
        case "receive_message":
          receiveMessage(data);
          break;
        default:
          break;
      }
    };
    socket.onclose = () => {
      console.log("Connection closed");
    };
  }

  function sendMessage(messageData) {
    dispatch(sendMessageAction(messageData));
    socket.send(JSON.stringify(messageData));
  }
  function receiveMessage(messageData) {
    delete messageData.meta;
    delete messageData.groupID;

    dispatch(receiveMessageAction(messageData));
  }

  function createGroup(groupData) {
    socket.send(JSON.stringify(groupData));
  }
  function loadGroupMessages(groupID) {
    dispatch(loadGroupMessagesThunk(groupID));
  }
  function closeWebsocket() {
    if (!socket) return;
    socket.close();
    socket = null;
  }

  return {
    socket,
    initializeWebsocket,
    closeWebsocket,
    loadGroupMessages,
    sendMessage,
    receiveMessage,
    createGroup,
  };
};

export default useWebSocket;
