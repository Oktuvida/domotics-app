import { Dimensions } from "react-native";
import create from "zustand";

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

const useSessionStore = create<DimensionsState>()((set) => ({
  windowHeight: Dimensions.get("window").height,
  windowWidth: Dimensions.get("window").width,
  setDimensions: ({ windowHeight, windowWidth }) =>
    set((state) => ({ ...state, windowHeight, windowWidth })),
}));

export default useSessionStore;
