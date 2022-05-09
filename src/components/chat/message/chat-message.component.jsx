import React from "react";
import { Text, Avatar, Group, Paper } from "@mantine/core";

import { useStyles } from "./chat-message.styles";

function ChatMessage({ messageData = null }) {
  const { classes } = useStyles();
  const isLocal = "12345" === messageData.userID;
  console.log(isLocal);
  return (
    messageData && (
      <Group
        withBorder
        radius="md"
        sx={
          isLocal
            ? { flexDirection: "row-reverse", marginTop: 2, marginBottom: 2 }
            : { marginTop: 10, marginBottom: 10 }
        }>
        <Avatar
          src={messageData.image}
          alt={messageData.name}
          radius="xl"
          sx={{ alignSelf: "flex-start", margin: "0.5rem" }}
        />
        <Paper className={isLocal ? classes.localMessage : classes.message}>
          {!isLocal && (
            <Group>
              <Text size="sm">{messageData.user}</Text>
              <Text size="xs" color="dimmed">
                Hoy 10:30 pm
              </Text>
            </Group>
          )}
          <Text className={classes.body} size="sm">
            {messageData.message}
          </Text>
        </Paper>
      </Group>
    )
  );
}
export default ChatMessage;
