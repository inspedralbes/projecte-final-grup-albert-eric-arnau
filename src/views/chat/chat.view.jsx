import { createStyles, Grid, Group, Paper } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { ChatInput } from "../../components/chat/index";
import { ChatMessage } from "../../components/chat/index";
import { SideBar } from "../../components/sidebar/index";

const socket = new WebSocket("wss://groupem.herokuapp.com");

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
        user: "GunteR_",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos ducimus cum quos illum a ipsum corporis deserunt, porro fuga unde ea, earum eum rem, maiores harum animi iusto minima",
      },
    ]);
  }, []);
  console.log(messages);
  socket.onmessage = ({ meta = "send_message", user, message }) => {
    switch (meta) {
      case "send_message":
        // setMessages((messages) => [
        //   ...messages,
        //   {
        //     user,
        //     message,
        //   },
        // ]);
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
  };

  return (
    <>
      <Grid
        container
        sx={{ height: "100%", width: "100%", margin: 0 }}
        grow
        gutter="xs">
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
