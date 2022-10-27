import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type ThemeState = {
  isDark: boolean;
  setIsDark: (isDark?: boolean) => void;
};

const useSessionStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        isDark: false,
        setIsDark: (isDark) => set(() => ({ isDark: isDark })),
      }),
      {
        name: "session",
        getStorage: () => {
          if (Platform.OS === "web") {
            return AsyncStorage;
          }
          return {
            setItem: setItemAsync,
            getItem: getItemAsync,
            removeItem: deleteItemAsync,
          };
        },
      }
    )
  )
);

export default useSessionStore;
