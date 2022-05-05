import { Navigate } from "react-router-dom";

function PublicRoutes({ children, isLogged }) {
  return isLogged ? <Navigate to="/chat" /> : children;
}

export default PublicRoutes;
