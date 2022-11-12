import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Title, useTheme } from "react-native-paper";
import AutoIcon from "@assets/icons/devices/auto.svg";
import Slider from "@components/UI/Slider";
import useSwitch from "@hooks/useSwitch";
import { contrastColor } from "@resources/colors";
import { getText } from "@resources/texts";

export default function Temperature() {
  const theme = useTheme();
  const { colors } = theme;
  const grades = 0;

  const [isAutoOn, , setIsAutoOn] = useSwitch(false);

  return (
    <View style={styles.container}>
      <View>
        <Title>{getText("Temperature")}</Title>
        <View
          style={[
            styles.gradesContainer,
            {
              backgroundColor: colors.primary,
            },
          ]}
        >
          <Text style={[styles.grades]}>{grades}°C</Text>
        </View>
      </View>
      <View>
        <Slider
          value={isAutoOn}
          onIcon={useCallback(
            ({ size }: { size: number }) => (
              <AutoIcon fill={colors.background} width={size} height={size} />
            ),
            [colors.background]
          )}
          offIcon={useCallback(
            ({ size }: { size: number }) => (
              <AutoIcon
                fill={contrastColor(colors.background, 10)}
                width={size}
                height={size}
              />
            ),
            [colors.background]
          )}
          onToggleSlider={setIsAutoOn}
          title={getText("Automatic")}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  gradesContainer: {
    padding: 10,
    marginVertical: 20,
    borderRadius: 15,
    transform: [{ scale: 2 }],
  },
  grades: {
    textAlign: "center",
  },
  icon: {
    minWidth: 200,
  },
});
