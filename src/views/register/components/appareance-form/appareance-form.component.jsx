import { Button, ColorPicker, Group, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import ChatMessage from "../../../../components/chat/message/chat-message.component";

function AppareanceForm({ next }) {
  const form = useForm({
    initialValues: {
      displayName: "",
      color: "#000000",
    },

    validate: {
      displayName: (value) => {
        if (!value) return "Username is required";
        if (value.length < 5) return "Username must be at least 5 characters";
        if (!/^[a-zA-Z0-9_]+$/.test(value))
          return "Username can only contain letters, numbers and underscores";
      },
    },
  });
  return (
    <>
      <form>
        <TextInput
          label="Display name"
          placeholder="Your username (ej. mangoloco)"
          {...form.getInputProps("displayName")}
        />
        <Group position="apart" spacing={0} mt={10}>
          <Text component="label" htmlFor="colorPicker" size="sm" weight={500}>
            Color display
          </Text>
          <ColorPicker
            fullWidth
            defaultValue="#000000"
            withPicker={false}
            swatchesPerRow={14}
            format="hex"
            swatches={[
              "#25262b",
              "#868e96",
              "#fa5252",
              "#e64980",
              "#be4bdb",
              "#7950f2",
              "#4c6ef5",
              "#228be6",
              "#15aabf",
              "#12b886",
              "#40c057",
              "#82c91e",
              "#fab005",
              "#fd7e14",
            ]}
            {...form.getInputProps("color")}
          />
        </Group>
      </form>
      <ChatMessage
        messageData={{
          time: 1652782796786,
          name: form.values?.displayName
            ? form.values?.displayName
            : "xX_NiceName_Xx",
          message: "Wow this is a cool chat message",
          color: form.values?.color,
        }}
      />
    </>
  );
}

export default AppareanceForm;
