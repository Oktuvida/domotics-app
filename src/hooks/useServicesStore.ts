import { REACT_APP_SERVER_URL } from "@env";
import ioClient from "socket.io-client";
import create from "zustand";

type DevicesState = {
  isDesktopOn: boolean;
  isProjectorOn: boolean;
  setIsDesktopOn: (isDesktopOn: boolean) => void;
  setIsProjectorOn: (isProjectorOn: boolean) => void;
};

type ServiceStoreType = DevicesState & {
  ready: boolean;
};

enum SocketSignalEnum {
  SET_DESKTOP = "set::devices::desktop",
  SET_PROJECTOR = "set::devices::projector",
  GET_STATE = "get::state"
}

const useServiceStore = create<ServiceStoreType>()((set) => {
  const socket = ioClient(REACT_APP_SERVER_URL);

  socket
    .on("connect", () => set((state) => ({ ...state, ready: true })))
    .on("disconnect", () => set((state) => ({ ...state, ready: false })))
    .on(SocketSignalEnum.GET_STATE, (newState: Partial<ServiceStoreType>) => set(state => ({...state, ...newState})))

  return {
    ready: false,
    isDesktopOn: false,
    isProjectorOn: false,
    setIsDesktopOn: (isDesktopOn) => socket.emit(SocketSignalEnum.SET_DESKTOP, isDesktopOn),
    setIsProjectorOn: (isProjectorOn) => socket.emit(SocketSignalEnum.SET_PROJECTOR, isProjectorOn),
  };
});

export default useServiceStore;
