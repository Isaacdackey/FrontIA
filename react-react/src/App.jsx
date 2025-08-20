import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CreateBrief from "./pages/CreateBrief";

export default function App() {
  return (
    <Router>
      <div className="font-crimson">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-brief" element={<CreateBrief />} />
        </Routes>
      </div>
    </Router>
  );
}
