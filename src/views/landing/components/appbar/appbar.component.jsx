import { useStyles } from "./appbar.styles";
import { Header, Container, Group, Button, Burger } from "@mantine/core";
import { NavLink } from "react-router-dom";
import Logo from "../../../../assets/Logo.svg";

function Appbar() {
  const { classes } = useStyles();

  const links = [
    {
      link: "/",
      label: "HOME",
    },
    {
      link: "/about",
      label: "ABOUT US",
    },
  ];
  const items = links.map((link, index) => (
    <NavLink to={link.link} key={index} className={classes.link}>
      {link.label}
    </NavLink>
  ));

  return (
    <Header height={60} sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger className={classes.burger} size="sm" />
          <img src={Logo} alt="logo" className={classes.logo} />
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <NavLink to="/login">
          <Button className={classes.login} radius="xl">
            Login
          </Button>
        </NavLink>
      </Container>
    </Header>
  );
}

export default Appbar;
