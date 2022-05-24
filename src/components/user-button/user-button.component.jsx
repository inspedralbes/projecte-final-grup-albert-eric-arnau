import React from "react";
import { UnstyledButton, Group, Avatar, Text } from "@mantine/core";
import { useStyles } from "./user-button.styles";

function UserButton({ image, name, username, icon, ...others }) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.user} {...others}>
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {username}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
export default UserButton;
