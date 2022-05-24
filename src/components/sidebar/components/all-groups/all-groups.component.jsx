import { useStyles } from "./all-groups.styles";
import { GroupLink } from "../../components/index";
import { Navbar, Text, Group, ScrollArea } from "@mantine/core";
import { useSelector } from "react-redux";

function AllGroups() {
  const { classes } = useStyles();
  const groups = useSelector((state) => state.groups.groups[0]);

  return (
    <Navbar.Section className={classes.section}>
      <Group className={classes.groupsHeader} position="apart">
        <Text size="s" weight={500} color="dimmed">
          All your groups
        </Text>
      </Group>
      <ScrollArea className={classes.groups} offsetScrollbars>
        {groups.map((group, index) => (
          <GroupLink key={index} data={group} />
        ))}
      </ScrollArea>
    </Navbar.Section>
  );
}

export default AllGroups;
