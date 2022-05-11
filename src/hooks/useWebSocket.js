let socket = null;

export const useWebSocket = () => {
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
