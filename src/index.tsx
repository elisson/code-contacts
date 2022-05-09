import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import ApplicationRoutes from "./Routes/ApplicationRoutes";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ApplicationRoutes />
    </HashRouter>
  </React.StrictMode>
);
