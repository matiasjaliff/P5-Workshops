import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bulma/css/bulma.min.css";
import App from "./App";

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const target = document.getElementById("root");

ReactDOM.render(app, target);
