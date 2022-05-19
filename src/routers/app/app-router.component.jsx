import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PATHS from "../paths";
import {
  Landing,
  Chat,
  NotFound,
  UserProfile,
  ProfileEdit,
  About,
  GroupFinder,
  Register,
  Login
} from "../../views";
import PrivateRoutes from "./private-routes.component";
import PublicRoutes from "./public-routes.component";
import { useSelector } from "react-redux";

function AppRouter() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        {/* Generic routes */}
        <Route path={PATHS.HOME} element={<Landing />} />
        <Route path={PATHS.ABOUT} element={<About />} />

        {/* Public routes */}
        <Route
          path={PATHS.LOGIN}
          element={
            <PublicRoutes isLogged={isAuthenticated}>{<Login />}</PublicRoutes>
          }
        />
        <Route
          path={PATHS.REGISTER}
          element={
            <PublicRoutes isLogged={isAuthenticated}>
              {<Register />}
            </PublicRoutes>
          }
        />

        {/* Private routes */}
        <Route
          path={PATHS.CHAT}
          element={
            <PrivateRoutes isLogged={isAuthenticated} navbarType={"chat"}>
              <Chat />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.PROFILE_USER}
          element={
            <PrivateRoutes isLogged={isAuthenticated}>
              <UserProfile />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.PROFILE_EDIT}
          element={
            <PrivateRoutes isLogged={isAuthenticated}>
              {/* <ProfileEdit /> */}
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.SETTINGS}
          element={
            <PrivateRoutes isLogged={isAuthenticated}>
              {/* <Settings /> */}
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.GROUP_FINDER}
          element={
            <PrivateRoutes isLogged={isAuthenticated}>
              <GroupFinder />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.GROUP_CREATE}
          element={
            <PrivateRoutes isLogged={isAuthenticated}>
              {/* <GroupCreate /> */}
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.GROUP_DETAILS}
          element={
            <PrivateRoutes isLogged={isAuthenticated}>
              {/* <GroupDetails /> */}
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.GROUP_EDIT}
          element={
            <PrivateRoutes isLogged={isAuthenticated}>
              {/* <GroupEdit /> */}
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
