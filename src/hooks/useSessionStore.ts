import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type ThemeState = {
  isDark: boolean;
  setIsDark: (isDark?: boolean) => void;
};

type DimensionsState = {
  windowHeight: number;
  windowWidth: number;
  setDimensions: ({
    windowHeight,
    windowWidth,
  }: {
    windowHeight: number;
    windowWidth: number;
  }) => void;
};

const useSessionStore = create<ThemeState & DimensionsState>()(
  devtools(
    persist(
      (set) => ({
        isDark: false,
        setIsDark: (isDark) => set((state) => ({ ...state, isDark })),

        windowHeight: Dimensions.get("window").height,
        windowWidth: Dimensions.get("window").width,
        setDimensions: ({ windowHeight, windowWidth }) =>
          set((state) => ({ ...state, windowHeight, windowWidth })),
      }),
      {
        name: "session",
        getStorage: () => {
          return AsyncStorage;
        },
      }
    )
  )
);

export default useSessionStore;
