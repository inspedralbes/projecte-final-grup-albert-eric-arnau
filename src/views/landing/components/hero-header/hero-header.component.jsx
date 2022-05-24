import { useStyles } from "./hero-header.styles";
import { Container, Title, Text, Button } from "@mantine/core";
import { NavLink } from "react-router-dom";

function HeroHeader() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title order={1} className={classes.title}>
              Get in our community and{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "red", to: "yellow" }}>
                chat
              </Text>{" "}
              with anyone!
            </Title>

            <Text component="p" className={classes.description} mt={30}>
              You are able to pick your own username and begin to chat with your
              friends. Also create groups and let others read your thoughts!
            </Text>

            <NavLink to="/group-finder">
              <Button
                variant="gradient"
                gradient={{ from: "red", to: "yellow" }}
                size="xl"
                className={classes.control}
                mt={40}>
                Begin group'em
              </Button>
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroHeader;
