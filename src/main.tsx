import React from "react";
import { ThemeProvider } from "styled-components/native";
import { registerRootComponent } from "expo";
import App from "./App";

function main() {
  return (
    <ThemeProvider theme={{}}>
      <App />
    </ThemeProvider>
  );
}

export default registerRootComponent(main);
