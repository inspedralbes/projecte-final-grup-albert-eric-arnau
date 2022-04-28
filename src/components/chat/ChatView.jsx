import React, { useState } from "react";
import { ChatMessage, ChatSideBar } from ".";
import { ChatInput } from "./ChatInput";

const socket = new WebSocket("wss://groupem.herokuapp.com");

socket.onopen = () => {
  console.log("Connected to server");
  let message = JSON.stringify({
    type: "connection",
  });
  socket.send(message);
};

socket.onmessage = ({ meta = "send_message", user, message }) => {
  switch (meta) {
    case "send_message":
      RenderNewMessage(user, message);
      break;
    default:
      console.log("default");
  }
};

const RenderNewMessage = (user, message) => (
  <ChatMessage
    messageData={{
      user,
      message,
    }}
  />
);

function ChatView() {
  const [messages, setMessages] = useState([]);

  return (
    <>
      <ChatSideBar />
      <div className="chat-messages">
        {messages.map(({ user, message }) => (
          <ChatMessage
            messageData={{
              user,
              message,
            }}
          />
        ))}
      </div>
      <ChatInput />
    </>
  );
}

export { ChatView };
