import { useStyles } from "./hero-header.styles";
import { Container, Title, Text, Button } from "@mantine/core";

function HeroHeader() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              ¡Únete a nuestra comunidad{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}>
                para chatear
              </Text>{" "}
              con quien quieras donde quieras!
            </Title>

            <Text className={classes.description} mt={30}>
              Tendrás la capacidad de crear una cuenta y comenzar a chatear con
              tus amigos. Podrás también crear grupos de chat para hablar de lo
              que quieras.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              size="xl"
              className={classes.control}
              mt={40}>
              Empezar a chatear
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroHeader;
