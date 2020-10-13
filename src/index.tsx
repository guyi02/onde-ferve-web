import React, { ChangeEvent, useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Forgot } from "./pages/Forgot";

function App() {
  return (
    <div className="App">
      <Forgot />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
