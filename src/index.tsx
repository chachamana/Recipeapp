import React from "react";
import ReactDOM from "react-dom/client";
//css
import "./index.css";
//theme
import { ThemeProvider } from "styled-components";
import { Theme} from "./Theme";
//grobal props
import { AppProvider } from './Context';

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <AppProvider>
    <ThemeProvider theme={Theme} >
      <App />
    </ThemeProvider>
    </AppProvider>
  </React.StrictMode>
);
