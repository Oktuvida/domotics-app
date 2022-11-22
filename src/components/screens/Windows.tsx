import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Slider from "@components/UI/Slider";
import { Endpoint } from "@domotics-app/lib";
import useServiceStore from "@hooks/useServicesStore";
import { getText } from "@resources/texts";

export default function Windows() {
  const {
    isFirstCurtainOpen,
    setIsFirstCurtainOpen,
    isSecondCurtainOpen,
    setIsSecondCurtainOpen,
    getComponentsState
  } = useServiceStore();

  useEffect(() => {
    getComponentsState([Endpoint.FIRST_CURTAIN_IS_OPEN, Endpoint.SECOND_CURTAIN_IS_OPEN])
  }, []);

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        value={isFirstCurtainOpen}
        offIcon="curtains-closed"
        onIcon="curtains"
        onToggleSlider={setIsFirstCurtainOpen}
        title={getText("First Curtain")}
      />
      <Slider
        style={styles.slider}
        value={isSecondCurtainOpen}
        offIcon="curtains-closed"
        onIcon="curtains"
        onToggleSlider={setIsSecondCurtainOpen}
        title={getText("Second Curtain")}
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
