import { createStyles, Group, Paper } from "@mantine/core";
import React, { useState } from "react";
import { ChatSideBar } from "../../components/chat/index";
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
    height: "90vh",
    width: "80vw",
    border: "1px solid black",
    borderRadius: "15px",
    marginBottom: "50px",
  },
});

function Chat() {
  const [messages, setMessages] = useState([]);
  const { classes } = useStyles();

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

  return (
    <>
      <Group spacing={"xl"}>
        
        {/* <ChatSideBar /> */}
        <SideBar/>
        <Paper radius="md">
          <div className={classes.chatContainer}>
            <ChatMessage messageData={messages} />
          </div>
          <ChatInput />
        </Paper>
      </Group>
    </>
  );
}

export default Chat;
