import React from "react";
import { View } from "react-native";
import { MainScreens, ServicesScreens } from "@resources/screens";
import { createServicesStack, MainStackProp } from "@resources/stacks";
import { getText } from "@resources/texts";

import Icon from "../UI/Icon";

import Devices from "./Devices";
import Lights from "./Lights";
import Temperature from "./Temperature";
import Windows from "./Windows";

type ServicesProps = {
  navigation: MainStackProp<MainScreens.SERVICES>;
};

const Stack = createServicesStack();
export default function Services({ navigation }: ServicesProps) {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let name: keyof typeof Icon.glyphMap | undefined = undefined;
            switch (route.name) {
              case ServicesScreens.LIGHTS:
                name = focused ? "sunny" : "sunny-outline";
                break;
              case ServicesScreens.DEVICES:
                name = focused ? "desktop" : "desktop-outline";
                break;
              case ServicesScreens.WINDOWS:
                name = focused ? "grid" : "grid-outline";
                break;
              case ServicesScreens.TEMPERATURE:
                name = focused ? "thermometer" : "thermometer-outline";
                break;
            }

            if (name !== undefined) {
              return <Icon name={name} color={color} size={12} />;
            }
          },
        })}
      >
        <Stack.Screen
          name={ServicesScreens.LIGHTS}
          component={Lights}
          options={{
            title: getText(ServicesScreens.LIGHTS),
          }}
        />
        <Stack.Screen
          name={ServicesScreens.DEVICES}
          component={Devices}
          options={{
            title: getText(ServicesScreens.DEVICES),
          }}
        />
        <Stack.Screen
          name={ServicesScreens.WINDOWS}
          component={Windows}
          options={{
            title: getText(ServicesScreens.WINDOWS),
          }}
        />
        <Stack.Screen
          name={ServicesScreens.TEMPERATURE}
          component={Temperature}
          options={{
            title: getText(ServicesScreens.TEMPERATURE),
          }}
        />
      </Stack.Navigator>
    </View>
  );
}
