import React, { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Slider from "@components/UI/Slider";
import { Endpoint } from "@domotics-app/lib";
import useServiceStore from "@hooks/useServicesStore";
import { getText } from "@resources/texts";

export default function Lights() {
  const {
    setAreBackLightsOn,
    setAreBoardLightsOn,
    setAreFrontLightsOn,
    areBackLightsOn,
    areBoardLightsOn,
    areFrontLightsOn,
    getComponentsState
  } = useServiceStore();

  useEffect(() => {
    getComponentsState([Endpoint.BACK_LIGHTS_ARE_ON, Endpoint.BOARD_LIGHTS_ARE_ON, Endpoint.FRONT_LIGHTS_ARE_ON])
  }, []);

  const areAllLightsOnChangeHandler = useCallback((isSwitchOn: boolean) => {
    setAreBoardLightsOn(isSwitchOn);
    setAreFrontLightsOn(isSwitchOn);
    setAreBackLightsOn(isSwitchOn);
  }, []);

  return (
    <View style={styles.container}>
      <Slider
        value={areBoardLightsOn && areFrontLightsOn && areBackLightsOn}
        onIcon="lightbulb-group"
        offIcon="lightbulb-group-outline"
        style={[styles.slider, styles.allLightsContainer]}
        title={getText("All")}
        onToggleSlider={areAllLightsOnChangeHandler}
      />
      <Slider
        value={areBoardLightsOn}
        onIcon="lightbulb"
        offIcon="lightbulb-outline"
        style={styles.slider}
        title={getText("Board")}
        onToggleSlider={setAreBoardLightsOn}
      />
      <Slider
        value={areFrontLightsOn}
        onIcon="lightbulb"
        offIcon="lightbulb-outline"
        style={styles.slider}
        title={getText("Front")}
        onToggleSlider={setAreFrontLightsOn}
      />
      <Slider
        value={areBackLightsOn}
        onIcon="lightbulb"
        offIcon="lightbulb-outline"
        style={styles.slider}
        title={getText("Back")}
        onToggleSlider={setAreBackLightsOn}
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
  allLightsContainer: {
    transform: [{ scale: 1.3 }],
    marginVertical: 20,
  },
  slider: {
    marginVertical: 10,
  },
});
