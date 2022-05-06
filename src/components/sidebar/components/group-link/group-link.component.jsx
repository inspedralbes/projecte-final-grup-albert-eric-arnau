import React from "react";
import { useStyles } from "./group-link.styles";
import { Avatar, Badge, Group } from "@mantine/core";
import { notificationNumberDisplay } from "../../../../helpers/notificationNumberDisplay  ";
function GroupLink({ data }) {
  const { name, icon, notifications } = data;
  const { classes } = useStyles();
  return (
    <div style={{ position: "relative" }}>
      <a
        href="/"
        onClick={(event) => event.preventDefault()}
        key={name}
        className={classes.groupLink}>
        <Group>
          <Avatar src={icon} radius="xl" />
          {name}

          {notifications && (
            <Badge
              fullWidth
              position="right"
              gradient={{ from: "orange", to: "red" }}
              size="sm"
              variant="gradient"
              color="red"
              className={classes.mainLinkBadge}>
              {notificationNumberDisplay(notifications)}
            </Badge>
          )}
        </Group>
      </a>
    </div>
  );
}

export default GroupLink;
