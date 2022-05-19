import { FavGroups, MainLinks, AllGroups } from "./components/index";
import { useStyles } from "./sidebar.styles.js";
import { Navbar, Group } from "@mantine/core";
import { Selector, Logout } from "tabler-icons-react";
import { UserButton } from "../user-button";
import { useSelector } from "react-redux";
import PATHS from "../../routers/paths";
import { useNavigate } from "react-router-dom";

function Sidebar({ navbarType }) {
  const { classes } = useStyles();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  function handleClick() {
    navigate(PATHS.GROUP_FINDER, { replace: true });
  }
  return (
    <Navbar height={700} width={{ sm: 300 }} px="md" className={classes.navbar}>
      {/* <Routes>
        <Route path={PATHS.CHAT2} element={<FavGroups />}></Route>
      </Routes> */}
      <Navbar.Section className={classes.section} onClick={handleClick}>
        <UserButton
          image="/Icon.svg"
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
            image={user.imgLink}
            name={user.username}
            email={user.name}
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
