import { Avatar, Group, Paper, Text } from "@mantine/core";
import { useStyles } from "./message-box.styles";

function MessageBox({ messageData = null }) {
  const { classes } = useStyles();
  return (
    <Group radius="md" sx={{ marginTop: 10, marginBottom: 10 }}>
      <Avatar
        radius="xl"
        sx={{ alignSelf: "flex-end", marginInline: "0.5rem" }}
      />
      <Paper className={classes.message}>
        <Group>
          <Text
            weight={700}
            size="sm"
            color={messageData.color ? messageData.color : "#000000"}>
            {messageData.name}
          </Text>
        </Group>

        <Text size="xs" color="dimmed">
          {messageData.time}
        </Text>
        <Text className={classes.body} size="sm">
          {messageData.message}
        </Text>
      </Paper>
    </Group>
  );
}

export default MessageBox;
