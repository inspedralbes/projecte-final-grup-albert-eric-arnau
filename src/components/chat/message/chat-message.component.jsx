import { Text, Avatar, Group, Paper } from "@mantine/core";

import { useStyles } from "./chat-message.styles";

function ChatMessage({ messageData = null }) {
  const { classes } = useStyles();
  //! change for user
  const isLocal = process.env.REACT_APP_USER_ID === messageData.userID;
  console.log(process.env.REACT_APP_USER_ID, messageData.userID);

  return (
    messageData && (
      <Group
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
          sx={{ alignSelf: "flex-end", marginInline: "0.5rem" }}
        />
        <Paper className={isLocal ? classes.localMessage : classes.message}>
          {!isLocal && (
            <Group>
              <Text weight={700} size="sm">
                {messageData.name}
              </Text>
            </Group>
          )}

          <Text
            size="xs"
            color="dimmed"
            className={isLocal && classes.timeLocalMessage}>
            {messageData.time || "Hoy 10:30 pm"}
          </Text>
          <Text className={classes.body} size="sm">
            {messageData.message}
          </Text>
        </Paper>
      </Group>
    )
  );
}
export default ChatMessage;
