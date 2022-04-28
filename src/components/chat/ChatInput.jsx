import React, { useState } from "react";
import { TextInput, createStyles, Group, Button } from "@mantine/core";
import { Send } from "tabler-icons-react";

const useStyles = createStyles({
  input: {
    width: "90%",
  },
  inputContainer: {
    marginBottom: "10px",
    width: "100vw",
    position: "fixed",
    bottom: 0,
  },
  sendIcon: {
    marginBlock: "auto",
  },
});

function ChatInput() {
  const [value, setValue] = useState("");
  const { classes } = useStyles();
  return (
    <Group position="center" spacing="xl" className={classes.inputContainer}>
      <TextInput
        className={classes.input}
        placeholder="Type a message..."
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Button
        radius="xl"
        variant="gradient"
        gradient={{
          from: "teal",
          to: "blue",
        }}
      >
        <Send size={24} strokeWidth={2} color={"white"} />
      </Button>
    </Group>
  );
}
export { ChatInput };
