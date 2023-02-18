import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "./Components/Sidebar";
import { Navigation } from "./Navigation";
import "./styles/import.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <div className="d-flex">
        <Sidebar />
        <Navigation />
      </div>
    </Router>
  </React.StrictMode>
);
