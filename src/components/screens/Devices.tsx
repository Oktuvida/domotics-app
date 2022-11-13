import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import LaptopOffIcon from "@assets/icons/devices/laptop-off.svg";
import LaptopOnIcon from "@assets/icons/devices/laptop-on.svg";
import ProjectorOff from "@assets/icons/devices/projector-off.svg";
import ProjectorOn from "@assets/icons/devices/projector-on.svg";
import Slider from "@components/UI/Slider";
import useServiceStore from "@hooks/useServicesStore";
import { getText } from "@resources/texts";

export default function Devices() {
  const { isDesktopOn, isProjectorOn, setIsDesktopOn, setIsProjectorOn } =
    useServiceStore();

  const desktopSliderHandler = useCallback((isSwitchOn: boolean) => {
    setIsDesktopOn(isSwitchOn);
  }, []);

  const projectorSliderHandler = useCallback((isSwitchOn: boolean) => {
    setIsProjectorOn(isSwitchOn);
  }, []);

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        value={isDesktopOn}
        offIcon={useCallback(
          ({ size }: { size: number }) => (
            <LaptopOffIcon width={size} height={size} />
          ),
          []
        )}
        onIcon={useCallback(
          ({ size }: { size: number }) => (
            <LaptopOnIcon width={size} height={size} />
          ),
          []
        )}
        onToggleSlider={desktopSliderHandler}
        title={getText("Computer")}
      />
      <Slider
        style={styles.slider}
        value={isProjectorOn}
        offIcon={useCallback(
          ({ size }: { size: number }) => (
            <ProjectorOff width={size} height={size} />
          ),
          []
        )}
        onIcon={useCallback(
          ({ size }: { size: number }) => (
            <ProjectorOn width={size} height={size} />
          ),
          []
        )}
        onToggleSlider={projectorSliderHandler}
        title={getText("Projector")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    transform: [{ scale: 1.3 }],
    marginVertical: 20,
  },
});
