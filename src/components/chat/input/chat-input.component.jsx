import React, { useState } from "react";
import { TextInput, createStyles, Group, Button } from "@mantine/core";
import { Send } from "tabler-icons-react";

const useStyles = createStyles({
  input: {
    width: "95%",
  },
  inputContainer: {
    marginBottom: "10px",
    width: "80vw",
    position: "fixed",
    bottom: 0,
  },
});

function ChatInput() {
  const [value, setValue] = useState("");
  const { classes } = useStyles();

  const SendMessage = (e) => {
    e.preventDefault();
    // TODO: logica para mandar el mensaje al websocket
    console.log("mando mensaje:", value);
    // TODO: logica para enseñar el mensaje nuevo en el chat
    setValue("");
  };

  return (
    <form onSubmit={SendMessage}>
      <Group position="apart" spacing="xs" className={classes.inputContainer}>
        <TextInput
          className={classes.input}
          placeholder="Type a message..."
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
        <Button
          type="submit"
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
    </form>
  );
}
export default ChatInput;
