import React from "react";
import { StyleSheet, View } from "react-native";
import Slider from "@components/UI/Slider";
import useSwitch from "@hooks/useSwitch";

export default function Windows() {
  const [isFirstCurtainOpen, , setIsFirstCurtainOpen] = useSwitch(false);
  const [isSecondCurtainOpen, , setIsSecondCurtainOpen] = useSwitch(false);

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        value={isFirstCurtainOpen}
        offIcon="curtains-closed"
        onIcon="curtains"
        onToggleSlider={setIsFirstCurtainOpen}
        title="First Curtain"
      />
      <Slider
        style={styles.slider}
        value={isSecondCurtainOpen}
        offIcon="curtains-closed"
        onIcon="curtains"
        onToggleSlider={setIsSecondCurtainOpen}
        title="Second Curtain"
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
