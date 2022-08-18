import React from "react";
import { render } from "react-dom";

import App from "./App";

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const target = document.getElementById("root");

render(app, target);
