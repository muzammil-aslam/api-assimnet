import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
import About from "./about";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function AppRoute() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About data="usama" />} />
        </Routes>
      </div>
    </Router>
  );
}
