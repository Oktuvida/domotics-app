import React, { useEffect } from "react";
import { Dimensions, useColorScheme } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { darkTheme, lightTheme } from "@resources/theme";
import { registerRootComponent } from "expo";

import "react-native-gesture-handler";

import useSessionStore from "./hooks/useSessionStore";
import App from "./App";

function main() {
  const isDark = useColorScheme() === "dark";
  const [setIsDark, setDimensions] = useSessionStore((state) => [
    state.setIsDark,
    state.setDimensions,
  ]);

  useEffect(() => {
    setIsDark(isDark);
  }, [isDark]);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({
        windowHeight: window.height,
        windowWidth: window.width,
      });
    });

    return () => subscription?.remove();
  }, []);

  return (
    <PaperProvider theme={isDark ? darkTheme : lightTheme}>
      <App />
    </PaperProvider>
  );
}

export default registerRootComponent(main);
