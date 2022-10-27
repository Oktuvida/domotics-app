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

import { HomeScreensProps, MainScreenProps } from "./screens";

export function createMainStack() {
  return createNativeStackNavigator();
}
export type MainStackOptions = NativeStackNavigationOptions;
export type MainStackProp<
  RouteName extends keyof MainScreenProps = keyof MainScreenProps
> = NativeStackNavigationProp<MainScreenProps, RouteName>;

export function createHomeStack() {
  return createMaterialBottomTabNavigator<HomeScreensProps>();
}
export type HomeStackOptions = MaterialBottomTabNavigationOptions;
export type HomeStackProp<
  RouteName extends keyof HomeScreensProps = keyof HomeScreensProps
> = MaterialBottomTabScreenProps<HomeScreensProps, RouteName>;
