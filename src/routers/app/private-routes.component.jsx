import { Group } from "@mantine/core";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { SideBar } from "../../components/sidebar";
//import { useWebSocket } from "../../hooks/useWebSocket";

function PrivateRoutes({ children, isLogged, navbarType }) {
  // const dispatch = useDispatch();
  // const { initializeWebsocket } = useWebSocket();

  // useEffect(() => {
  //   initializeWebsocket();
  // }, [dispatch]);

  return isLogged ? (
    <Group spacing={"xl"}>
      <SideBar navbarType={navbarType} />
      {children}
    </Group>
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateRoutes;
