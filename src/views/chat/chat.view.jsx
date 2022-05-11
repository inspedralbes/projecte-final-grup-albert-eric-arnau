import { createStyles, Grid, Group, Paper } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { ChatInput } from "../../components/chat/index";
import { ChatMessage } from "../../components/chat/index";
import { SideBar } from "../../components/sidebar/index";

// const socket = new WebSocket("wss://groupem.herokuapp.com");
const socket = new WebSocket("ws://192.168.210.155:8001");
// const socket = new WebSocket("ws://groupem.api.alumnes.inspedralbes.cat:7895/");

socket.onopen = () => {
  console.log("Connected to server");
  let message = JSON.stringify({
    type: "connection",
  });
  socket.send(message);
};

// const RenderNewMessage = (user, message) => (
//   <ChatMessage
//     messageData={{
//       user,
//       message,
//     }}
//   />
// );

const useStyles = createStyles({
  chatContainer: {
    height: "90vh",
    border: "1px solid black",
    borderRadius: "15px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      border: "10px solid transparent",
      width: "10px",
      marginRight: "10px",
    },

    "&::-webkit-scrollbar-track": {
      borderRadius: "10px",
      backgroundColor: "#e1e1e1",
      marginBottom: "5px",
      marginTop: "5px",
    },

    "&::-webkit-scrollbar-thumb": {
      border: "1px solid #e1e1e1",
      borderRadius: "10px",
      backgroundColor: "#3ddbc1",
    },
  },
});

function Chat() {
  //!\ CUIDAO LOCO
  const userID = "12345";

  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    console.log(messagesEndRef);
    messagesEndRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    console.log("scrolled");
  }, [messages]);

  const { classes } = useStyles();
  useEffect(() => {
    setMessages((messages) => [
      ...messages,
      {
        name: "GunteR_",
        username: "GunteR_",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos ducimus cum quos illum a ipsum corporis deserunt, porro fuga unde ea, earum eum rem, maiores harum animi iusto minima",
        time: "2342378492042534053",
      },
    ]);
  }, []);
  console.log(messages);
  socket.onmessage = (event) => {
    const { meta, name, username, time, message } = JSON.parse(event.data);
    const newMessage = {
      name,
      username,
      time,
      message,
    };

    switch (meta) {
      case "receive_message":
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        break;
      default:
        console.log("default");
    }
  };
  const handleMessage = (message) => {
    setMessages((messages) => [
      ...messages,
      {
        user: "GunteR_",
        userID,
        message,
      },
    ]);
    socket.send(
      JSON.stringify({
        meta: "send_message",
        name: "GunteR_",
        username: "GunteR_",
        groupID: "uJZNitszHdqWRqceyXXn",
        userID: "x3NKtQfvOd0g5ylKMBqi",
        message,
      })
    );
  };

  return (
    <>
      <Grid sx={{ height: "100%", width: "100%", margin: 0 }} grow gutter="xs">
        <Grid.Col span={12} className={classes.chatContainer}>
          {messages.map((message) => (
            <ChatMessage messageData={message} key={Math.random() * 55555555} />
          ))}
          <div ref={messagesEndRef} />
        </Grid.Col>
        <Grid.Col span={12} sx={{ padding: 0, marginTop: 20 }}>
          <ChatInput handleMessage={handleMessage} />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Chat;
