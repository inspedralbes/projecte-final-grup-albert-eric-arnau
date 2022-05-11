import { useDispatch, useSelector } from "react-redux";
import { sendMessageAction } from "../redux/actions";

let socket = null;

const useWebSocket = () => {
  const dispatch = useDispatch();
  const { chat } = useSelector((store) => store); // this is the state of the chat reducer
  console.log("chat", chat);
  function initializeWebsocket() {
    if (socket) return;
    socket = new WebSocket("ws://localhost:8000");
    //  socket = new WebSocket("wss://groupem.herokuapp.com");

    socket.onopen = () => {
      console.log("Connected to server:" + socket.url);
    };
    socket.onmessage = (event) => {
      console.log("Message from server:" + event.data);
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

  function closeWebsocket() {
    if (!socket) return;
    socket.close();
    socket = null;
  }

  return {
    socket,
    initializeWebsocket,
    closeWebsocket,
    sendMessage,
    createGroup,
  };
};

export default useWebSocket;
