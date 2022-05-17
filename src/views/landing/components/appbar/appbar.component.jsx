import { useStyles } from "./appbar.styles";
import { Header, Container, Group, Button, Burger, Paper } from "@mantine/core";
import { NavLink } from "react-router-dom";
import Logo from "../../../../assets/Logo.svg";
import { useBooleanToggle } from "@mantine/hooks";

function Appbar() {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);

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
    <Button
      className={classes.link}
      variant="subtle"
      radius="xl"
      key={index}
      onClick={opened ? () => toggleOpened(false) : undefined}>
      <NavLink to={link.link} style={{ textDecoration: "none" }}>
        {link.label}
      </NavLink>
    </Button>
  ));

  return (
    <Header height={60} sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
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
      {opened && (
        <Group direction="column">
          <Paper
            className={classes.mobileBarContainer}
            shadow="xl"
            radius="xs"
            p="md"
            withBorder>
            {items}
          </Paper>
        </Group>
      )}
    </Header>
  );
}

export default Appbar;
