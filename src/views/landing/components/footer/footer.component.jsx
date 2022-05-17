import { Text, Container, ActionIcon, Group, Tooltip } from "@mantine/core";
import { BrandTwitter, BrandYoutube, AppWindow } from "tabler-icons-react";
import { useStyles } from "./footer.styles";

const data = [
  {
    links: [
      {
        link: "/",
        label: "Home",
      },
    ],
  },
];

function Footer() {
  const { classes } = useStyles();
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size="xs" color="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 Institut Pedralbes. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Tooltip
            label="Institut Pedralbes"
            color="orange"
            transition="fade"
            transitionDuration={200}
            withArrow>
            <ActionIcon size="lg">
              <a href="https://www.institutpedralbes.cat">
                <AppWindow size={18} />
              </a>
            </ActionIcon>
          </Tooltip>
          <ActionIcon size="lg">
            <BrandYoutube size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default Footer;
