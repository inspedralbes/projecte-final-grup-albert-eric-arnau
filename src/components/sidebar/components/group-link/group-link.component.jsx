import { useStyles } from "./group-link.styles";
import { Avatar, Group } from "@mantine/core";
import { useDispatch } from "react-redux";
import {
  setActiveGroup,
  setActiveChatGroupAction,
} from "../../../../redux/actions";
import PATHS from "../../../../routers/paths";
import { useNavigate } from "react-router-dom";
// import { notificationNumberDisplay } from "../../../../helpers/notificationNumberDisplay";

function GroupLink({ data }) {
  const { name, imgLink, uid } = data;
  const { classes } = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelectGroup = () => {
    dispatch(setActiveGroup(data));
    dispatch(setActiveChatGroupAction(uid));
  };
  function handleClick() {
    navigate(PATHS.CHAT, { replace: true });
  }
  return (
    <div style={{ position: "relative" }}>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          handleSelectGroup();
          handleClick();
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
