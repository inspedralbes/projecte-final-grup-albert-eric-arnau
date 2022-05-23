import { Message, User, Settings, ClipboardPlus } from "tabler-icons-react";
import { MenuLink } from "../index";
import { Navbar } from "@mantine/core";
import { useStyles } from "./main-links.styles";
import PATHS from "../../../../routers/paths";
import { useSelector } from "react-redux";
import { useMemo } from "react";
function MainLinks() {
  const { classes } = useStyles();
  const { user } = useSelector((store) => store.auth);
  const links = useMemo(() => {
    return [
      { icon: Message, label: "Chat", to: PATHS.CHAT },
      { icon: User, label: "Profile", to: `/profile/${user.uid}` },
      { icon: ClipboardPlus, label: "Create group", to: PATHS.GROUP_CREATE },
      { icon: Settings, label: "Settings", to: PATHS.PROFILE_EDIT },
    ];
  }, [user.uid]);

  const mainLinks = links.map((link, index) => (
    <MenuLink key={index} data={link} />
  ));

  return (
    <Navbar.Section className={classes.section}>
      <div className={classes.mainLinks}>{mainLinks}</div>
    </Navbar.Section>
  );
}

export default MainLinks;
