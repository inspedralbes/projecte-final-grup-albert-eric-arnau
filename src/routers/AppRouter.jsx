import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ChatView } from "../components/chat";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatView />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
