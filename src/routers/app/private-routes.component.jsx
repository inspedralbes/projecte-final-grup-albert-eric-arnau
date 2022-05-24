import { Navigate } from "react-router-dom";
import { Layout } from "../../views";

function PrivateRoutes({ children, isLogged, navbarType }) {
  return isLogged ? (
    <Layout navbarType={navbarType}>{children}</Layout>
  ) : (
    <Navigate to="/" />
  );
}

export default PrivateRoutes;
