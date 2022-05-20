import { useStyles } from "./fav-groups.styles";
import { GroupLink } from "../../components/index";
import { Star } from "tabler-icons-react";
import { Navbar, Text, Group, ThemeIcon, Tooltip } from "@mantine/core";
function FavGroups() {
  const { classes } = useStyles();

  const groups = [
    {
      icon: "https://storage.qoo-img.com/game/17607/KGhkiIABcwb0ZdwWMfGGBsHCb6gQbQNX.jpg",
      name: "Valorant_ESP",
      notifications: 200,
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/2a/LoL_icon.svg",
      name: "LOL_ESP",
      notifications: 4,
    },
    {
      icon: "https://i.pinimg.com/550x/52/1c/b8/521cb800d77337409282a9781e506203.jpg",
      name: "COD",
      notifications: null,
    },
    {
      icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png",
      name: "Minecraft_ESP",
      notifications: 1,
    },
    {
      icon: "https://assets.materialup.com/uploads/d6522050-2ab3-4c75-945c-90fbb0ddd5ac/preview.jpg",
      name: "Formula1",
      notifications: 2000000,
    },
  ];

  const groupLinks = groups.map((group, index) => (
    <GroupLink key={index} data={group} />
  ));
  return (
    <Navbar.Section className={classes.section}>
      <Group className={classes.groupsHeader} position="apart">
        <Text size="s" weight={500} color="dimmed">
          Fav Groups
        </Text>
        <Tooltip label="Favorite Groups" withArrow position="right">
          <ThemeIcon variant="filed" size={20} color="dark">
            <Star size={12} />
          </ThemeIcon>
        </Tooltip>
      </Group>
      <div className={classes.groups}>{groupLinks}</div>
    </Navbar.Section>
  );
}

export default FavGroups;
