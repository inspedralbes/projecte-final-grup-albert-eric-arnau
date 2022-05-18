import { Text, Container, Group, Tooltip, Paper } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { Link } from "tabler-icons-react";
import { useStyles } from "./footer.styles";

function Footer() {
  const { classes } = useStyles();
  return (
    <footer className={classes.footer}>
      <Container className={classes.afterFooter}>
        <Paper className={classes.rightsContainer}>
          <Text color="dimmed" size="lg">
            © 2022 Group'em. All rights reserved.
          </Text>
          <Text color="dimmed" size="lg">
            © 2022 Institut Pedralbes. All rights reserved.
          </Text>
        </Paper>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Tooltip
            label={
              <>
                <Link size={16} style={{ marginRight: "5px" }} />
                Institut pedralbes
              </>
            }
            color="orange"
            transition="fade"
            transitionDuration={200}
            closeDelay={200}
            withArrow>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.institutpedralbes.cat">
              <img
                src="/LogoPedralbes.png"
                alt="Institut Pedralbes"
                width={40}
                height={40}
              />
            </a>
          </Tooltip>
        </Group>
      </Container>
    </footer>
  );
}

export default Footer;
