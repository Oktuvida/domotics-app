export enum MainScreens {
  HOME = "Home",
}

export type MainScreenProps = {
  [MainScreens.HOME]: undefined;
};

export enum HomeScreens {
  LIGHTS = "Lights",
  DEVICES = "Devices",
  WINDOWS = "Windows",
  TEMPERATURE = "Temperature",
}

export type HomeScreensProps = {
  [HomeScreens.LIGHTS]: undefined;
  [HomeScreens.DEVICES]: undefined;
  [HomeScreens.WINDOWS]: undefined;
  [HomeScreens.TEMPERATURE]: undefined;
};
