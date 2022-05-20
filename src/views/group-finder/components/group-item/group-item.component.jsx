import { Avatar, Group, Text, Button, TextInput } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useState } from "react";

function GroupItem({ group }) {
  const modals = useModals();
  const [groupPassword, setGroupPassword] = useState("");

  const handleCloseModal = (modal) => {
    // TODO: execute api call to join group

    modals.closeModal(modal);
  };

  const openConfirmModal = () => {
    const inputValue = groupPassword;
    const setInputValue = (e) => setGroupPassword(e.target.value);
    const modal = modals.openModal({
      title: "Group information",
      children: (
        <>
          <Group mb={50} direction="column">
            <Group spacing={10}>
              <Avatar size={40} src={group.avatar} radius={40} mr={10} />
              <Text>{group.name}</Text>
            </Group>
            <Text>{group.description}</Text>
          </Group>
          {group.password && (
            <TextInput
              type="text"
              value={inputValue}
              onChange={setInputValue}
              placeholder="Confirmation word"
              label="Enter the confirmation word:"
              mb={10}
            />
          )}
          <Button
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
            fullWidth
            onClick={() => handleCloseModal(modal)}>
            Join group
          </Button>
        </>
      ),
    });
  };

  return (
    <tr>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={group.avatar} radius={40} />
          <div>
            <Text size="sm" weight={500}>
              {group.name}
            </Text>
            <Text color="dimmed" size="xs">
              Group name
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <Text size="sm">{group.description}</Text>
        <Text size="xs" color="dimmed">
          Description
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <Button
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
            onClick={() => openConfirmModal()}>
            Group info
          </Button>
        </Group>
      </td>
    </tr>
  );
}

export default GroupItem;
