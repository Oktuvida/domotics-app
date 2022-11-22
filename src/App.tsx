import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { useTheme } from "react-native-paper";
import Services from "@components/screens/Services";
import usePersistStore, { PersistStoreType } from "@hooks/usePersistStore";
import {
  NavigationContainer,
  Theme as NavigationTheme,
} from "@react-navigation/native";
import { createMainStack, MainStackOptions } from "@resources/stacks";
import { getText } from "@resources/texts";

import Home from "./components/screens/Home";
import { getNavigationTheme } from "./resources/navigation";
import { MainScreens } from "./resources/screens";

const selector = (state: PersistStoreType) => state.isDark;

export default function App() {
  const isDark = usePersistStore(selector);
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
          backgroundColor={navigationTheme?.colors.card}
        />
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const stackOptions: MainStackOptions = {} as const;

const Stack = createMainStack();
function RootStack() {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name={MainScreens.HOME}
        component={Home}
        options={{
          title: getText(MainScreens.HOME),
        }}
      />
      <Stack.Screen
        name={MainScreens.SERVICES}
        component={Services}
        options={{
          title: getText(MainScreens.SERVICES),
        }}
      />
      <Stack.Screen
        name={MainScreens.REPORTS}
        component={View}
        options={{
          title: getText(MainScreens.REPORTS),
        }}
      />
    </Stack.Navigator>
  );
}
