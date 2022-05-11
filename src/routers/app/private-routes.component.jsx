import { Group } from "@mantine/core";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { SideBar } from "../../components/sidebar";
import { Layout } from "../../views";
//import { useWebSocket } from "../../hooks/useWebSocket";

function PrivateRoutes({ children, isLogged, navbarType }) {
  // const dispatch = useDispatch();
  // const { initializeWebsocket } = useWebSocket();

  // useEffect(() => {
  //   initializeWebsocket();
  // }, [dispatch]);

  return isLogged ? (
    <Layout navbarType={navbarType}>{children}</Layout>
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateRoutes;
