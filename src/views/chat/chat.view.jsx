import { createStyles, Grid, Group, Paper } from "@mantine/core";
import React, { useEffect, useState } from "react";
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
    minHeight: "90%",
    border: "1px solid black",
    borderRadius: "15px",
  },
});

function Chat() {
  //!\ CUIDAO LOCO
  const userID = "12345";
  const [messages, setMessages] = useState([]);
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
        name: "guntasan",
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
        </Grid.Col>
        <Grid.Col span={12} sx={{ padding: 0, marginTop: 20 }}>
          <ChatInput handleMessage={handleMessage} />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Chat;
