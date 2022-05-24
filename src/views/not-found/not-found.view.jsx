import React from "react";
import { Container, Title, Text, Button, SimpleGrid } from "@mantine/core";
import { ReactComponent as ErrorImage } from "./assets/image.svg";
import { useStyles } from "./not-found.styles";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}>
        <ErrorImage className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
            onClick={() =>
              navigate({
                pathname: "/",
              })
            }>
            Get back to home page
          </Button>
        </div>
        <ErrorImage className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}

export default NotFound;
