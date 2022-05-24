import useStyles from "./hero-cards.styles";
import { Title, Container, SimpleGrid, useMantineTheme } from "@mantine/core";
import { MessageShare, Pencil, BrandFirebase } from "tabler-icons-react";

import { Feature } from "./feature";

const featuresData = [
  {
    icon: MessageShare,
    title: "Chat with anyone",
    description:
      "Use our chat to communicate with your friends or connect with new people.",
  },
  {
    icon: Pencil,
    title: "Totally customizable",
    description: "We have a lot of customizable settings for your profile.",
  },
  {
    icon: BrandFirebase,
    title: "Firebase usage",
    description:
      "We use a custom API and connection with Firebase for the best security.",
  },
];

function HeroCards({ data = featuresData }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Container className={classes.wrapper}>
      <Title order={2} className={classes.title}>
        Our objective is to provide a platform for everyone
      </Title>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}>
        {data.map((feature, index) => (
          <Feature {...feature} key={index} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default HeroCards;
