import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type ThemeState = {
  isDark: boolean;
  setIsDark: (isDark?: boolean) => void;
};

const usePersistStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        isDark: false,
        setIsDark: (isDark) => set((state) => ({ ...state, isDark })),
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

export default usePersistStore;
