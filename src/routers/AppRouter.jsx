import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChatView, LandingPageView } from "../views";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageView />}></Route>
        <Route path="/chat" element={<ChatView />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
