import { GroupLink } from "./components/index";
import { useStyles } from "./sidebar.styles.js";
import {
  Navbar,
  TextInput,
  Avatar,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ThemeIcon,
  Tooltip,
} from "@mantine/core";
import {
  Message,
  User,
  Settings,
  Search,
  Selector,
  Star,
} from "tabler-icons-react";
import { UserButton } from "../user-button";

const links = [
  { icon: Message, label: "Chat" },
  { icon: User, label: "Perfil" },
  { icon: Settings, label: "Ajustes" },
];

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

function Sidebar() {
  const { classes } = useStyles();

  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={25} className={classes.mainLinkIcon} />
        <span>{link.label}</span>
      </div>
    </UnstyledButton>
  ));

  const groupLinks = groups.map((group, index) => (
    <GroupLink key={index} data={group} />
  ));

  return (
    <Navbar height={700} width={{ sm: 300 }} px="md" className={classes.navbar}>
      <Navbar.Section className={classes.section}>
        <UserButton
          image="https://i.imgur.com/fGxgcDF.png"
          name="Group'em"
          icon={<Selector size={14} />}
        />
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <Group className={classes.groupsHeader} position="apart">
          <Text size="s" weight={500} color="dimmed">
            Grupos Favoritos
          </Text>
          <Tooltip label="Grupos favoritos" withArrow position="right">
            <ThemeIcon variant="filed" size={20} color="dark">
              <Star size={12} />
            </ThemeIcon>
          </Tooltip>
        </Group>
        <div className={classes.groups}>{groupLinks}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.section} style={{ marginTop: "auto" }}>
        <UserButton
          image="https://www.disponalencasa.com/pub/media/catalog/product/cache/4025f56c98cb88143bb53de4d18da868/m/o/monster-juice-mango-loco.jpg"
          name="MangoLoco"
          email="@Arnau"
          icon={<Selector size={14} />}
        />
      </Navbar.Section>
    </Navbar>
  );
}

export default Sidebar;
