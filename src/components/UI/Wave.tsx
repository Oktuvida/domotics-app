import React from "react";
import { Dimensions, StyleSheet, View, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import Svg, { Path } from "react-native-svg";
import { contrastColor } from "@resources/colors";

export type WaveProps = {
  contrastAmount?: number;
  opacity?: number;
  style?: ViewStyle;
};
export default React.memo(function Wave({
  contrastAmount,
  opacity,
  style,
}: WaveProps) {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <View style={{ ...style, ...styles.wrapper }}>
      <View style={styles.container}>
        <Svg viewBox="0 0 1440 320" style={styles.svg}>
          <Path
            fill={contrastColor(colors.primary, contrastAmount ?? 0)}
            fillOpacity={opacity ?? 1}
            d="M0,0L21.8,37.3C43.6,75,87,149,131,165.3C174.5,181,218,139,262,138.7C305.5,139,349,181,393,186.7C436.4,192,480,160,524,144C567.3,128,611,128,655,128C698.2,128,742,128,785,160C829.1,192,873,256,916,261.3C960,267,1004,213,1047,197.3C1090.9,181,1135,203,1178,197.3C1221.8,192,1265,160,1309,149.3C1352.7,139,1396,149,1418,154.7L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          />
        </Svg>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: Dimensions.get("window").width,
    minHeight: Dimensions.get("window").height,
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  svg: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
});
