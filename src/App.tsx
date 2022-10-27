import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { useTheme } from "react-native-paper";
import {
  NavigationContainer,
  Theme as NavigationTheme,
} from "@react-navigation/native";
import { createMainStack, MainStackOptions } from "@resources/stacks";

import Home from "./components/screens/Home";
import useSessionStore from "./hooks/useSessionStore";
import { getNavigationTheme } from "./resources/navigation";
import { MainScreens } from "./resources/screens";

export default function App() {
  const isDark = useSessionStore((state) => state.isDark);
  const theme = useTheme();
  const [navigationTheme, setNavigationTheme] = useState<NavigationTheme>();

  const { colors } = theme;
  useEffect(() => {
    setNavigationTheme(getNavigationTheme(isDark, colors));
  }, [isDark, colors]);

  return (
    <NavigationContainer theme={navigationTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor={colors.background}
        />
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const stackOptions: MainStackOptions = {
  headerShown: false,
} as const;

const Stack = createMainStack();
function RootStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen name={MainScreens.HOME} component={Home} />
    </Stack.Navigator>
  );
}
