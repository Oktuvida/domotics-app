import React, { useEffect } from "react";
import { useColorScheme } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { darkTheme, lightTheme } from "@resources/theme";
import { registerRootComponent } from "expo";

import "react-native-gesture-handler";

import useSessionStore from "./hooks/useSessionStore";
import App from "./App";

function main() {
  const isDark = useColorScheme() === "dark";
  const setIsDark = useSessionStore((state) => state.setIsDark);

  useEffect(() => {
    setIsDark(isDark);
  }, [isDark]);

  return (
    <PaperProvider theme={isDark ? darkTheme : lightTheme}>
      <App />
    </PaperProvider>
  );
}

export default registerRootComponent(main);
