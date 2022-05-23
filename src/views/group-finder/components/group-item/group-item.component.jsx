import { Avatar, Group, Text, Button, TextInput } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { joinGroupThunk } from "../../../../redux/thunk/group-thunk";

function GroupItem({ group }) {
  const modals = useModals();
  const passwordRef = useRef();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleCloseModal = (modal, password = "") => {
    dispatch(joinGroupThunk(group.id, user.uid, password));
    modals.closeModal(modal);
  };

  const openConfirmModal = () => {
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
              ref={passwordRef}
              type="text"
              placeholder="Confirmation word"
              label="Enter the confirmation word:"
              mb={10}
            />
          )}
          <Button
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
            fullWidth
            onClick={() =>
              handleCloseModal(modal, passwordRef?.current?.value)
            }>
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
