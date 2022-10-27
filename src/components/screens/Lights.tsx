import React, { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Slider from "@components/UI/Slider";
import useSwitch from "@hooks/useSwitch";

export default function Lights() {
  const [isAllLightsOn, setIsAllLightsOn] = useSwitch(false);
  const [isBoardLightsOn, setIsBoardLightsOn, isBoardLightsOnChangeHandler] =
    useSwitch(false);
  const [isFrontLightsOn, setIsFrontLightsOn, isFrontLightsOnChangeHandler] =
    useSwitch(false);
  const [isBackLightsOn, setIsBackLightsOn, isBackLightsOnChangeHandler] =
    useSwitch(false);

  useEffect(() => {
    setIsAllLightsOn(isBoardLightsOn && isFrontLightsOn && isBackLightsOn);
  }, [isBoardLightsOn, isFrontLightsOn, isBackLightsOn]);

  const isAllLightsOnChangeHandler = useCallback((isSwitchOn: boolean) => {
    setIsBoardLightsOn(isSwitchOn);
    setIsFrontLightsOn(isSwitchOn);
    setIsBackLightsOn(isSwitchOn);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.allLightsContainer}>
        <Slider
          value={isAllLightsOn}
          onIcon="lightbulb-group"
          offIcon="lightbulb-group-outline"
          style={styles.slider}
          title="All"
          onToggleSlider={isAllLightsOnChangeHandler}
        />
      </View>
      <Slider
        value={isBoardLightsOn}
        onIcon="lightbulb"
        offIcon="lightbulb-outline"
        style={styles.slider}
        title="Board"
        onToggleSlider={isBoardLightsOnChangeHandler}
      />
      <Slider
        value={isFrontLightsOn}
        onIcon="lightbulb"
        offIcon="lightbulb-outline"
        style={styles.slider}
        title="Front"
        onToggleSlider={isFrontLightsOnChangeHandler}
      />
      <Slider
        value={isBackLightsOn}
        onIcon="lightbulb"
        offIcon="lightbulb-outline"
        style={styles.slider}
        title="Back"
        onToggleSlider={isBackLightsOnChangeHandler}
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
    transform: [{ scale: 1.2 }],
    marginVertical: 5,
  },
  slider: {
    marginVertical: 10,
  },
});
