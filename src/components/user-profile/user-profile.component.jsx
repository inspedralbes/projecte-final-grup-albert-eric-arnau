import { Avatar, Group, Text, Box } from "@mantine/core";
import { At, Mail } from "tabler-icons-react";

import { useStyles } from "./user-profile.styles";
function PublicUserProfile({ avatar, name, username, email }) {
  const { classes } = useStyles();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
      }}>
      <Group noWrap sx={{ height: "auto" }}>
        <Avatar src={avatar} size={160} radius="md" />
        <div>
          <Text size="xl" weight={500}>
            {name}
          </Text>
          <Group noWrap spacing={10} mt={3}>
            <At size={16} className={classes.icon} />
            <Text size="lg" weight={700} color="dimmed">
              {username}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={3}>
            <Mail size={16} className={classes.icon} />
            <Text size="lg" color="dimmed">
              {email}
            </Text>
          </Group>
        </div>
      </Group>
    </Box>
  );
}

export default PublicUserProfile;
