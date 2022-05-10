import { Message, User, Settings } from "tabler-icons-react";
import { MenuLink } from "../index";
import { Navbar } from "@mantine/core";
import { useStyles } from "./main-links.styles";
const links = [
  { icon: Message, label: "Chat" },
  { icon: User, label: "Perfil" },
  { icon: Settings, label: "Ajustes" },
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
