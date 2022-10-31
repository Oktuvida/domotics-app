import { DefaultTheme } from "react-native-paper";
import { Theme as NavigationTheme } from "@react-navigation/native";

import { contrastColor } from "./colors";

export function getNavigationTheme(
  isDark: boolean,
  colors: typeof DefaultTheme.colors
): NavigationTheme {
  const navigationColors: NavigationTheme["colors"] = {
    primary: colors.primary,
    background: colors.background,
    card: contrastColor(colors.background, 3),
    border: contrastColor(colors.background, 3),
    notification: colors.notification,
    text: colors.text,
  };
  return {
    dark: isDark,
    colors: navigationColors,
  };
}
