import { createStyles, Grid, Group, Paper } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ChatInput } from "../../components/chat/index";
import { ChatMessage } from "../../components/chat/index";
import { SideBar } from "../../components/sidebar/index";
import useWebSocket from "../../hooks/useWebSocket";

// const socket = new WebSocket("wss://groupem.herokuapp.com");
// const socket = new WebSocket("ws://groupem.api.alumnes.inspedralbes.cat:7895/");

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
  const chat = useSelector((state) => state.chat);
  const { messages } = chat;
  const { initializeWebsocket, loadGroupMessages, sendMessage } =
    useWebSocket();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    console.log(messagesEndRef);
    messagesEndRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    console.log("scrolled");
  }, [chat.messages]);

  const { classes } = useStyles();
  useEffect(() => {
    initializeWebsocket();
    loadGroupMessages("uJZNitszHdqWRqceyXXn");
  }, []);
  console.log(messages);

  const handleMessage = (message) => {
    let newMessage = {
      meta: "send_message",
      name: "GunteR_",
      username: "GunteR_",
      groupID: "uJZNitszHdqWRqceyXXn",
      userID: process.env.REACT_APP_USER_ID || "",
      message,
    };
    sendMessage(newMessage);
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
