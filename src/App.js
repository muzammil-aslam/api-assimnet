import logo from "./logo.svg";
import "./App.css";
import Contact from "./contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppRoute from "./route";
import { useState } from "react";

function App() {
  return (
    <div>
      <Contact />
    </div>
  );
}

export default App;
