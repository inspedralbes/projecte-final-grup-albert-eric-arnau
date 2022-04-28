import React from "react";
import { createStyles, Text, Avatar, Group, Paper } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
  },

  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  content: {
    "& > p:last-child": {
      marginBottom: 0,
    },
  },

  message: {
    width: "fit-content",
    maxWidth: "50%",
    margin: "5px",
    padding: "10px 20px 10px 5px",
  },
}));

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
export { ChatMessage };
