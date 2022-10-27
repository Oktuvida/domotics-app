import { Platform } from "react-native";
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
  if (Platform.OS !== "web") {
    const primary = navigationColors.primary;
    navigationColors.primary = navigationColors.card;
    navigationColors.card = primary;
    navigationColors.border = primary;
  }
  return {
    dark: isDark,
    colors: navigationColors,
  };
}
