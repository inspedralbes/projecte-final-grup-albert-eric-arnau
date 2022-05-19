import { Avatar, Group, Text, ActionIcon, Button } from "@mantine/core";
import {
  Pencil,
  Messages,
  Note,
  ReportAnalytics,
  Trash,
} from "tabler-icons-react";

function GroupItem({ item }) {
  return (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <Text size="sm">{item.email}</Text>
        <Text size="xs" color="dimmed">
          Email
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <Button>
            Group info
          </Button>
        </Group>
      </td>
    </tr>
  );
}

export default GroupItem;
