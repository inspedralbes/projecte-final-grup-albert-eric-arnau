import { FavGroups, MainLinks, AllGroups } from "./components/index";
import { useStyles } from "./sidebar.styles.js";
import { Navbar, Group, Button } from "@mantine/core";
import { Selector, Logout } from "tabler-icons-react";
import { UserButton } from "../user-button";
import { useDispatch, useSelector } from "react-redux";
import PATHS from "../../routers/paths";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutThunk } from "../../redux/thunk/auth-thunk";

function Sidebar({ navbarType }) {
  const { classes } = useStyles();
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(PATHS.GROUP_FINDER, { replace: true });
  };

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate(PATHS.LOGIN, { replace: true });
  };

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

      {navbarType === "chat" ? (
        // All Groups
        <>
          <NavLink to={`/profile/${user.uid}`} className={classes.returnButton}>
            <Button
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              style={{ width: "100%" }}>
              Dashboard
            </Button>
          </NavLink>
          <AllGroups />
        </>
      ) : (
        // Main Links
        <>
          <MainLinks />
          <FavGroups />
        </>
      )}

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
            onClick={handleLogout}
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
