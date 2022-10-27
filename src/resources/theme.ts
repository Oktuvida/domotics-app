import { DarkTheme, DefaultTheme } from "react-native-paper";

export type ThemeType = typeof DefaultTheme;

export const darkTheme: ThemeType = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#212529",
    text: "#f8f9fa",
    primary: "#184e77",
    accent: "#2c7da0",
    disabled: "#dee2e6",
    backdrop: "rgba(0, 0, 0, 0.5)",
    error: "#660708",
  },
} as const;

export const lightTheme: ThemeType = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: darkTheme.colors.text,
    text: darkTheme.colors.background,
    primary: "#1a759f",
    accent: "#61a5c2",
    disabled: "#6c757d",
    backdrop: darkTheme.colors.backdrop,
    error: "#ba181b",
  },
} as const;
