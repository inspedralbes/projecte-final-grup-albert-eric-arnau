import { Navigate } from "react-router-dom";

function PublicRoutes({ children, isLogged }) {
  return isLogged ? <Navigate to="/group-finder" /> : children;
}

export default PublicRoutes;
