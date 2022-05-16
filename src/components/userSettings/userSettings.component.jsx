import { TextInput, PasswordInput, Tooltip, Center, Text } from "@mantine/core";
import { InfoCircle } from "tabler-icons-react";
function UserSettings() {
  const rightSection = (
    <Tooltip
      label="We store your data securely"
      placement="end"
      withArrow
      transition="pop-bottom-right">
      <Text color="dimmed" sx={{ cursor: "help" }}>
        <Center>
          <InfoCircle size={18} />
        </Center>
      </Text>
    </Tooltip>
  );

  return (
    <TextInput
      rightSection={rightSection}
      label="Tooltip shown on icon hover"
      placeholder="Your email"
    />
  );
}

export default UserSettings;
