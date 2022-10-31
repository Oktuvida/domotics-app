import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationOptions,
  MaterialBottomTabScreenProps,
} from "@react-navigation/material-bottom-tabs";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { MainScreenProps, ServicesScreensProps } from "./screens";

export function createMainStack() {
  return createNativeStackNavigator();
}
export type MainStackOptions = NativeStackNavigationOptions;
export type MainStackProp<
  RouteName extends keyof MainScreenProps = keyof MainScreenProps
> = NativeStackNavigationProp<MainScreenProps, RouteName>;

export function createServicesStack() {
  return createMaterialBottomTabNavigator<ServicesScreensProps>();
}
export type ServicesStackOptions = MaterialBottomTabNavigationOptions;
export type ServicesStackProps<
  RouteName extends keyof ServicesScreensProps = keyof ServicesScreensProps
> = MaterialBottomTabScreenProps<ServicesScreensProps, RouteName>;
