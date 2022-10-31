import React, { useMemo } from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import Svg, { Path } from "react-native-svg";
import useSessionStore from "@hooks/useSessionStore";
import { contrastColor } from "@resources/colors";

export type WaveProps = {
  contrastAmount?: number;
  opacity?: number;
  height?: number;
  style?: ViewStyle;
};

export default React.memo(function Wave({
  contrastAmount = 10,
  opacity = 1,
  height = 300,
  style,
}: WaveProps) {
  const theme = useTheme();
  const windowWidth = useSessionStore((state) => state.windowWidth);

  const fillColor = useMemo(() => {
    return contrastColor(theme.colors.primary, contrastAmount);
  }, [theme.colors.primary]);
  const styles = useMemo(() => {
    return createStyles({
      fillColor,
      height,
      windowWidth,
    });
  }, [fillColor, height, windowWidth]);

  return (
    <View style={[style, styles.wrapper]}>
      <View style={styles.container}>
        <Svg viewBox="0 0 1440 320" style={styles.svg}>
          <Path
            fill={fillColor}
            fillOpacity={opacity}
            d="M0,64L34.3,58.7C68.6,53,137,43,206,42.7C274.3,43,343,53,411,90.7C480,128,549,192,617,229.3C685.7,267,754,277,823,256C891.4,235,960,181,1029,144C1097.1,107,1166,85,1234,80C1302.9,75,1371,85,1406,90.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </Svg>
      </View>
    </View>
  );
});

const createStyles = ({
  fillColor,
  height,
  windowWidth,
}: {
  fillColor: string;
  height: number;
  windowWidth: number;
}) =>
  StyleSheet.create({
    wrapper: {
      position: "absolute",
      width: windowWidth,
      bottom: 0,
      zIndex: -1000,
    },
    container: {
      backgroundColor: fillColor,
      height: Math.pow(height, 1.005) * (Platform.OS === "web" ? 0.4 : 1),
    },
    svg: {
      position: "absolute",
      width: windowWidth,
      height: windowWidth * 0.225,
      bottom: height * (Platform.OS === "web" ? 0.3 : 1),
    },
  });
