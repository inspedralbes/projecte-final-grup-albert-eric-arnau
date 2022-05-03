import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import paths from "../paths";

import routes from "./routes";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
        <Route path="*" element={<Navigate to={paths.NOT_FOUND} />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
