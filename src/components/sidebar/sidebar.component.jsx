import { FavGroups, MainLinks, AllGroups } from "./components/index";
import { useStyles } from "./sidebar.styles.js";
import { Navbar, Group } from "@mantine/core";
import { Selector, Logout } from "tabler-icons-react";
import { UserButton } from "../user-button";

function Sidebar({ navbarType }) {
  const { classes } = useStyles();

  return (
    <Navbar height={700} width={{ sm: 300 }} px="md" className={classes.navbar}>
      {/* <Routes>
        <Route path={PATHS.CHAT2} element={<FavGroups />}></Route>
      </Routes> */}
      <Navbar.Section className={classes.section}>
        <UserButton
          image="https://i.imgur.com/fGxgcDF.png"
          name="Group'em"
          icon={<Selector size={14} />}
        />
      </Navbar.Section>

      {/* Main Links */}
      {navbarType !== "chat" && (
        <>
          <MainLinks />
          <FavGroups />
        </>
      )}
      {/* Main Links */}

      {/* All Groups */}
      {navbarType === "chat" && <AllGroups />}
      {/* All Groups */}

      <Navbar.Section
        className={classes.section}
        style={{ marginTop: "auto", position: "relative" }}>
        <Group>
          <UserButton
            image="https://www.disponalencasa.com/pub/media/catalog/product/cache/4025f56c98cb88143bb53de4d18da868/m/o/monster-juice-mango-loco.jpg"
            name="MangoLoco"
            email="@Arnau"
            icon={<Selector size={14} />}
          />
          <Logout
            className={classes.user}
            size={20}
            style={{ position: "absolute", right: 10 }}
          />
        </Group>
      </Navbar.Section>
    </Navbar>
  );
}

export default Sidebar;
