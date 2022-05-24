import { useStyles } from "./group-link.styles";
import { Avatar, Group } from "@mantine/core";
import { useDispatch } from "react-redux";
import {
  setActiveGroup,
  setActiveChatGroupAction,
} from "../../../../redux/actions";
// import { notificationNumberDisplay } from "../../../../helpers/notificationNumberDisplay";

function GroupLink({ data }) {
  const { name, imgLink, id } = data;
  const { classes } = useStyles();
  const dispatch = useDispatch();

  const handleSelectGroup = () => {
    dispatch(setActiveGroup(data));

    dispatch(setActiveChatGroupAction());
    console.log(data);
  };

  return (
    <div style={{ position: "relative" }}>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          handleSelectGroup();
        }}
        key={name}
        className={classes.groupLink}>
        <Group>
          <Avatar src={imgLink} radius="xl" />
          {name}

          {/* {notifications && (
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
          )} */}
        </Group>
      </a>
    </div>
  );
}

export default GroupLink;
