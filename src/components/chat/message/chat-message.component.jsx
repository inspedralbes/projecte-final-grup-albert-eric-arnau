import React from "react";
import { Text, Avatar, Group, Paper } from "@mantine/core";

import { useStyles } from "./chat-message.styles";

function ChatMessage({ messageData = null }) {
  const { classes } = useStyles();
  return (
    messageData && (
      <Paper withBorder radius="md" className={classes.message}>
        <Group>
          <Avatar src={messageData.image} alt={messageData.name} radius="xl" />
          <div>
            <Text size="sm">{messageData.user}</Text>
            <Text size="xs" color="dimmed">
              10:31
            </Text>
          </div>
        </Group>
        <Text className={classes.body} size="sm">
          {messageData.message}
        </Text>
      </Paper>
    )
  );
}
export default ChatMessage;
