import { Message, User, Settings } from "tabler-icons-react";
import { MenuLink } from "../index";
import { Navbar } from "@mantine/core";
import { useStyles } from "./main-links.styles";
import PATHS from "../../../../routers/paths";
const links = [
  { icon: Message, label: "Chat", to: PATHS.CHAT },
  { icon: User, label: "Perfil", to: PATHS.CHAT },
  { icon: Settings, label: "Ajustes", to: PATHS.CHAT },
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
