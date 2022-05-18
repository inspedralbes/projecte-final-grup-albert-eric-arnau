import { useDispatch, useSelector } from "react-redux";
import { sendMessageAction } from "../redux/actions";
import { loadGroupMessagesThunk } from "../redux/thunk/chat-thunk";

let socket = null;

const useWebSocket = () => {
  const dispatch = useDispatch();
  const { chat } = useSelector((store) => store); // this is the state of the chat reducer

  function initializeWebsocket() {
    if (socket) return;
    // socket = new WebSocket(
    //   process.env.REACT_APP_WEBSOCKET_CONNECTION_URL
    // );
    socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_CONNECTION_URL);

    socket.onopen = () => {
      console.log("Connected to server");
      let message = JSON.stringify({
        meta: "connection",
        userID: process.env.REACT_APP_USER_ID || "",
        username: "GunteR_",
      });
      socket.send(message);
    };

    socket.onmessage = (event) => {
      const { data } = event;

      const message = JSON.parse(data);
      console.log("Message received: ", message);
      switch (message.meta) {
        case "receive_message":
          console.table(message);
          receiveMessage(message);
          break;
        default:
          console.log("Message from server:" + event.data);
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
    dispatch(sendMessageAction(messageData));
    socket.send(JSON.stringify(messageData));
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
    createGroup,
  };
};

export default useWebSocket;
