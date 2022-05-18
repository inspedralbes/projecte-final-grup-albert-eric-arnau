import { Container, Text, Title } from "@mantine/core";
import { useStyles } from "./title-text.styles";

function TitleText() {
  const { classes } = useStyles();
  return (
    <Container>
      <Title order={1} className={classes.title}>
        About us
      </Title>
      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          We are a group of students from Institut Pedralbes who are finishing
          their studies. We wanted to do an application that would help people
          to connect with each other, that's why we thought about a group-based
          chatting app.
        </Text>
      </Container>
    </Container>
  );
}

export default TitleText;
