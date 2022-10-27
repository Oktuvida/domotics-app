import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Avatar, Surface, Switch, useTheme } from "react-native-paper";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { contrastColor } from "@resources/colors";

export type SliderProps = {
  value: boolean;
  onIcon: string;
  offIcon: string;
  onToggleSlider?: (isSwitchOn: boolean) => void;
  style?: ViewStyle;
  title?: string;
};

export default React.memo(function Slider({
  value,
  onIcon,
  offIcon,
  onToggleSlider,
  style,
  title,
}: SliderProps) {
  const theme = useTheme();
  const { colors } = theme;

  const textColor = useDerivedValue(() => {
    return withTiming(value ? 1 : 0, {
      duration: 100,
    });
  }, [value]);

  const animatedText = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        textColor.value,
        [0, 1],
        [colors.text, contrastColor(colors.primary, 10)]
      ),
    };
  });

  const onToggleSwitch = (value: boolean) => {
    if (typeof onToggleSlider === "function") {
      onToggleSlider(value);
    }
  };

  return (
    <Surface style={{ ...styles.container, ...style }}>
      <View style={{ ...styles.container, ...styles.leftContent }}>
        <Avatar.Icon
          style={styles.icon}
          icon={value ? onIcon : offIcon}
          size={48}
        />
      </View>
      <View style={styles.rightContent}>
        {title && <Animated.Text style={[animatedText]}>{title}</Animated.Text>}
        <Switch value={value} onValueChange={onToggleSwitch} />
      </View>
    </Surface>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 8,
    maxHeight: 100,
    maxWidth: 200,
    alignSelf: "center",
    borderRadius: 15,
    margin: 0,
  },
  leftContent: {
    marginRight: 20,
  },
  rightContent: {
    flex: 1,
    justifyContent: "space-evenly",
    minHeight: 70,
    maxHeight: 70,
    height: "100%",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
});
