import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useWebSocket } from "../../hooks/useWebSocket";

function PrivateRoutes({ children, isLogged }) {
  // const dispatch = useDispatch();
  // const { initializeWebsocket } = useWebSocket();

  // useEffect(() => {
  //   initializeWebsocket();
  // }, [dispatch]);

  return isLogged ? children : <Navigate to="/" />;
}

export default PrivateRoutes;
