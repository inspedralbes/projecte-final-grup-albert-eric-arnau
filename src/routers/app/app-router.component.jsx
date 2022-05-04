import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PATHS from "../paths";
import { Landing, Chat, NotFound } from "../../views";

function AppRouter() {
  const logged = true;
  return (
    <Router>
      <Routes>
        {logged ? (
          <Route path={PATHS.CHAT} element={<Chat />} />
        ) : (
          <Route path={PATHS.HOME} element={<Landing />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
