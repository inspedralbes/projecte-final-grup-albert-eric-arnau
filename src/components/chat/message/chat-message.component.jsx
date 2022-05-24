import { Text, Avatar, Group, Paper } from "@mantine/core";
import { useSelector } from "react-redux";

import { useStyles } from "./chat-message.styles";

function ChatMessage({ messageData = null }) {
  const { classes } = useStyles();
  const { user } = useSelector((store) => store.auth);
  const isLocal = user.uid === messageData.userID;
  const date = new Date(messageData.time);
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
          src={messageData.imgLink}
          alt={messageData.name}
          radius="xl"
          sx={{ alignSelf: "flex-end", marginInline: "0.5rem" }}
        />
        <Paper className={isLocal ? classes.localMessage : classes.message}>
          {!isLocal && (
            <Group>
              <Text
                weight={700}
                size="sm"
                color={messageData.color ? messageData.color : "#000000"}>
                {messageData.name}
              </Text>
            </Group>
          )}

          <Text
            size="xs"
            color="dimmed"
            className={isLocal && classes.timeLocalMessage}>
            {date.toLocaleDateString("en-GB", {
              hourCycle: "h12",
              hour: "numeric",
              minute: "numeric",
            })}
          </Text>
          <Text size="sm">{messageData.message}</Text>
        </Paper>
      </Group>
    )
  );
}
export default ChatMessage;
