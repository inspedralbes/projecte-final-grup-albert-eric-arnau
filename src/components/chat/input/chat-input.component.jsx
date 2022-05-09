import React, { useState } from "react";
import { TextInput, Group, Button, Grid } from "@mantine/core";
import { Send } from "tabler-icons-react";

import { useStyles } from "./chat-input.styles";

function ChatInput({ handleMessage }) {
  const [value, setValue] = useState("");
  const SendMessage = (e) => {
    e.preventDefault();
    handleMessage(value);
    setValue("");
  };

  return (
    <form onSubmit={SendMessage}>
      <Group>
        <TextInput
          placeholder="Type a message..."
          value={value}
          sx={{ flexGrow: 1 }}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
        <Button
          type="submit"
          radius="xl"
          variant="gradient"
          sx={{ width: "60px" }}
          gradient={{
            from: "teal",
            to: "blue",
          }}>
          <Send size={24} strokeWidth={2} color={"white"} />
        </Button>
      </Group>
    </form>
  );
}
export default ChatInput;
