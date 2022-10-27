import React from "react";
import { View } from "react-native";
import { HomeScreens, MainScreens } from "@resources/screens";
import { createHomeStack, MainStackProp } from "@resources/stacks";

import Icon from "../UI/Icon";

import Lights from "./Lights";

type HomeProps = {
  navigation: MainStackProp<MainScreens.HOME>;
};

const Stack = createHomeStack();
export default function Home({ navigation }: HomeProps) {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let name: keyof typeof Icon.glyphMap | undefined = undefined;
          switch (route.name) {
            case HomeScreens.LIGHTS:
              name = focused ? "sunny" : "sunny-outline";
              break;
            case HomeScreens.DEVICES:
              name = focused ? "desktop" : "desktop-outline";
              break;
            case HomeScreens.WINDOWS:
              name = focused ? "grid" : "grid-outline";
              break;
            case HomeScreens.TEMPERATURE:
              name = focused ? "thermometer" : "thermometer-outline";
              break;
          }

          if (name !== undefined) {
            return <Icon name={name} color={color} size={12} />;
          }
        },
      })}
    >
      <Stack.Screen name={HomeScreens.LIGHTS} component={Lights} />
      <Stack.Screen name={HomeScreens.DEVICES} component={View} />
      <Stack.Screen name={HomeScreens.WINDOWS} component={View} />
      <Stack.Screen name={HomeScreens.TEMPERATURE} component={View} />
    </Stack.Navigator>
  );
}
