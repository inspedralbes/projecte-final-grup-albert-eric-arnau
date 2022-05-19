import { useStyles } from "./appbar.styles";
import {
  Header,
  Container,
  Group,
  Button,
  Burger,
  Paper,
  Center,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
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
    <NavLink to={link.link} key={index} style={{ textDecoration: "none" }}>
      <Button
        className={classes.link}
        variant="subtle"
        radius="xl"
        onClick={opened ? () => toggleOpened(false) : undefined}>
        {link.label}
      </Button>
    </NavLink>
  ));

  return (
    <Header height={60} className={classes.header} fixed>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
          <img src="/Logo.svg" alt="logo" className={classes.logo} />
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <NavLink to="/login">
          <Button
            className={classes.login}
            variant="gradient"
            gradient={{ from: "red", to: "yellow" }}
            radius="xl">
            Login
          </Button>
        </NavLink>
      </Container>
      {opened && (
        <Center direction="column">
          <Paper
            className={classes.mobileBarContainer}
            shadow="xl"
            radius="xs"
            p="md"
            withBorder>
            {items}
          </Paper>
        </Center>
      )}
    </Header>
  );
}

export default Appbar;
