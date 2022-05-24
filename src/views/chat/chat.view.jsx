import { Grid } from "@mantine/core";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ChatInput } from "../../components/chat/index";
import { ChatMessage } from "../../components/chat/index";
import { useStyles } from "./chat-view.styles";
import useWebSocket from "../../hooks/useWebSocket";

function Chat() {
  const chat = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);
  const { messages, activeGroupID } = chat;
  const { initializeWebsocket, loadGroupMessages, sendMessage } =
    useWebSocket();

  const { classes } = useStyles();
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    console.log(messagesEndRef);
    messagesEndRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat.messages]);

  useEffect(() => {
    initializeWebsocket();
    // loadGroupMessages();
  }, []);
  console.log(messages);

  const handleMessage = (message) => {
    let newMessage = {
      meta: "send_message",
      name: user.name,
      username: user.username,
      groupID: activeGroupID,
      userID: user.uid || "",
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
