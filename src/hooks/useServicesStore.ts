import { Client, Endpoint, IncomingMessage } from "@domotics-app/lib";
import { REACT_APP_SERVER_URL } from "@env";
import create from "zustand";

type DevicesState = {
  isDesktopOn: boolean;
  isProjectorOn: boolean;
  areFrontLightsOn: boolean;
  areBackLightsOn: boolean;
  areBoardLightsOn: boolean;
  isFirstCurtainOpen: boolean;
  isSecondCurtainOpen: boolean;
  setIsDesktopOn: (isDesktopOn: boolean) => void;
  setIsProjectorOn: (isProjectorOn: boolean) => void;
  setAreFrontLightsOn: (areFrontLightsOn: boolean) => void;
  setAreBackLightsOn: (areBackLightsOn: boolean) => void;
  setAreBoardLightsOn: (areBoardLightsOn: boolean) => void;
  setIsFirstCurtainOpen: (isFirstCurtainOpen: boolean) => void;
  setIsSecondCurtainOpen: (isSecondCurtainOpen: boolean) => void;
};

export type ServiceStoreType = DevicesState & {
  getComponentsState: (components: Endpoint[]) => void;
};


const useServiceStore = create<ServiceStoreType>()((set) => {
  const client = new Client(REACT_APP_SERVER_URL);

  const messageHandler = (message: IncomingMessage) => {
    switch (message.endpoint) {
      case Endpoint.ALL_LIGHTS_ARE_ON:
        set((state) => ({
          ...state,
          areBackLightsOn: message.payload,
          areFrontLightsOn: message.payload,
          areBoardLightsOn: message.payload,
        }));
        break;

      case Endpoint.BACK_LIGHTS_ARE_ON:
        set((state) => ({ ...state, areBackLightsOn: message.payload }));
        break;

      case Endpoint.BOARD_LIGHTS_ARE_ON:
        set((state) => ({
          ...state,
          areBoardLightsOn: message.payload,
        }));
        break;

      case Endpoint.FRONT_LIGHTS_ARE_ON:
        set((state) => ({ ...state, areFrontLightsOn: message.payload }));
        break;

      case Endpoint.DESKTOP_IS_ON:
        set((state) => ({ ...state, isDesktopOn: message.payload }));
        break;

      case Endpoint.FIRST_CURTAIN_IS_OPEN:
        set((state) => ({ ...state, isFirstCurtainOpen: message.payload }));
        break;

      case Endpoint.PROJECTOR_IS_ON:
        set((state) => ({ ...state, isProjectorOn: message.payload }));
        break;

      case Endpoint.SECOND_CURTAIN_IS_OPEN:
        set((state) => ({ ...state, isSecondCurtainOpen: message.payload }));
        break;
    }
  }

  client.on("GET", messageHandler)
  client.on("CHANGE", messageHandler);

  return {
    isDesktopOn: false,
    isProjectorOn: false,
    areBackLightsOn: false,
    areBoardLightsOn: false,
    areFrontLightsOn: false,
    isFirstCurtainOpen: false,
    isSecondCurtainOpen: false,
    setIsDesktopOn: (isDesktopOn) => {
      client.emit("CHANGE", {
        endpoint: Endpoint.DESKTOP_IS_ON,
        payload: isDesktopOn,
      });
      set((state) => ({...state, isDesktopOn}))
    },
    setIsProjectorOn: (isProjectorOn) => {
      client.emit("CHANGE", {
        endpoint: Endpoint.PROJECTOR_IS_ON,
        payload: isProjectorOn,
      })
      set((state) => ({...state, isProjectorOn}))
    },
    setAreFrontLightsOn: (areFrontLightsOn: boolean) => {
      client.emit("CHANGE", {
        endpoint: Endpoint.FRONT_LIGHTS_ARE_ON,
        payload: areFrontLightsOn,
      })
      set((state) => ({...state, areFrontLightsOn}))
    },
    setAreBackLightsOn: (areBackLightsOn: boolean) => {
      client.emit("CHANGE", {
        endpoint: Endpoint.BACK_LIGHTS_ARE_ON,
        payload: areBackLightsOn,
      });
      set((state) => ({...state, areBackLightsOn}));
    },
    setAreBoardLightsOn: (areBoardLightsOn: boolean) => {
      client.emit("CHANGE", {
        endpoint: Endpoint.BOARD_LIGHTS_ARE_ON,
        payload: areBoardLightsOn,
      })
      set((state) => ({...state, areBoardLightsOn}))
    },
    setIsFirstCurtainOpen: (isFirstCurtainOpen: boolean) => {
      client.emit("CHANGE", {
        endpoint: Endpoint.FIRST_CURTAIN_IS_OPEN,
        payload: isFirstCurtainOpen,
      });
      set((state) => ({...state, isFirstCurtainOpen}))
    },
    setIsSecondCurtainOpen: (isSecondCurtainOpen: boolean) => {
      client.emit("CHANGE", {
        endpoint: Endpoint.SECOND_CURTAIN_IS_OPEN,
        payload: isSecondCurtainOpen,
      });
      set((state) => ({...state, isSecondCurtainOpen}))
    },
    getComponentsState: (endpoints: Endpoint[]) => {
      endpoints.forEach(endpoint => {
        client.emit("GET", {
          endpoint
        })
      })
    }
  };
});

export default useServiceStore;
