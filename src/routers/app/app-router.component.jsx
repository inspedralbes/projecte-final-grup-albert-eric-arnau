import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PATHS from "../paths";
import {
  Landing,
  Chat,
  NotFound,
  UserProfile,
  Register,
  Login,
  About,
  ProfileEdit,
} from "../../views";
import PrivateRoutes from "./private-routes.component";
import PublicRoutes from "./public-routes.component";

function AppRouter() {
  const logged = true;
  return (
    <Router>
      <Routes>
        {/* Generic routes */}
        <Route path={PATHS.HOME} element={<Landing />} />
        <Route path={PATHS.ABOUT} element={<About />} />

        {/* Public routes */}
        <Route
          path={PATHS.LOGIN}
          element={<PublicRoutes isLogged={logged}>{<Login />}</PublicRoutes>}
        />
        <Route
          path={PATHS.REGISTER}
          element={
            <PublicRoutes isLogged={logged}>{<Register />}</PublicRoutes>
          }
        />

        {/* Private routes */}
        <Route
          path={PATHS.CHAT}
          element={
            <PrivateRoutes isLogged={logged} navbarType={"chat"}>
              <Chat />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.PROFILE_USER}
          element={
            <PrivateRoutes isLogged={logged}>
              <UserProfile />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.PROFILE_EDIT}
          element={
            <PrivateRoutes isLogged={logged}>
              <ProfileEdit />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.SETTINGS}
          element={
            <PrivateRoutes isLogged={logged}>
              {/* <Settings /> */}
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.GROUP_FINDER}
          element={
            <PrivateRoutes isLogged={logged}>
              {/* <GroupFinder /> */}
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.GROUP_CREATE}
          element={
            <PrivateRoutes isLogged={logged}>
              {/* <GroupCreate /> */}
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.GROUP_DETAILS}
          element={
            <PrivateRoutes isLogged={logged}>
              {/* <GroupDetails /> */}
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.GROUP_EDIT}
          element={
            <PrivateRoutes isLogged={logged}>
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
