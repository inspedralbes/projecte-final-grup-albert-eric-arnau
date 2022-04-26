import React from "react";

function ChatView() {
  const socket = new WebSocket("wss://groupem.herokuapp.com");

  socket.onopen = () => {
    console.log("Connected to server");
    let message = JSON.stringify({
      type: "connection",
    });
    socket.send(message);
    //socket.onmessage({ data: socket.localAddress });
  };

  setInterval(() => {
    console.log("still connected");
    socket.send(
      JSON.stringify({
        type: "ping",
      })
    );
  }, 10000);

  return <div>chat</div>;
}

export { ChatView };
