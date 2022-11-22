export enum MainScreens {
  HOME = "Home",
  SERVICES = "Services",
  REPORTS = "Reports",
}

export type MainScreenProps = {
  [MainScreens.HOME]: undefined;
  [MainScreens.SERVICES]: undefined;
  [MainScreens.REPORTS]: undefined;
};

export enum ServicesScreens {
  LIGHTS = "Lights",
  DEVICES = "Devices",
  WINDOWS = "Windows",
}

export type ServicesScreensProps = {
  [ServicesScreens.LIGHTS]: undefined;
  [ServicesScreens.DEVICES]: undefined;
  [ServicesScreens.WINDOWS]: undefined;
};
