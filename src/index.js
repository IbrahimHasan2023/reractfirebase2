import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Css/Component/alerts.css";
import "./Components/loading.css";
import "./Css/Component/button.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pages/auth/Auth.css";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import MenuContext from "./Context/MenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MenuContext>
      <Router>
        <App />
      </Router>
    </MenuContext>
  </React.StrictMode>
);
