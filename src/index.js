import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <App2 />
    <App3 />
    <App4 />
  </StrictMode>
);