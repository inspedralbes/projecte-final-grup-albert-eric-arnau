import { Message, User, Settings, ClipboardPlus } from "tabler-icons-react";
import { MenuLink } from "../index";
import { Navbar } from "@mantine/core";
import { useStyles } from "./main-links.styles";
import PATHS from "../../../../routers/paths";
const links = [
  { icon: Message, label: "Chat", to: PATHS.CHAT },
  { icon: User, label: "Profile", to: PATHS.PROFILE_USER },
  { icon: ClipboardPlus, label: "Create group", to: PATHS.GROUP_CREATE },
  { icon: Settings, label: "Settings", to: PATHS.PROFILE_EDIT },
];
function MainLinks() {
  const { classes } = useStyles();

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
