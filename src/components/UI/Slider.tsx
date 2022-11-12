import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Avatar, Surface, Switch, Text, useTheme } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { contrastColor } from "@resources/colors";

export type SliderProps = {
  value: boolean;
  onIcon: IconSource;
  offIcon: IconSource;
  onToggleSlider?: (isSwitchOn: boolean) => void;
  style?: StyleProp<ViewStyle>;
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

  const onToggleSwitch = (value: boolean) => {
    if (typeof onToggleSlider === "function") {
      onToggleSlider(value);
    }
  };

  return (
    <Surface style={[style, styles.container]}>
      <View style={{ ...styles.container, ...styles.leftContent }}>
        <Avatar.Icon
          style={styles.icon}
          icon={value ? onIcon : offIcon}
          size={48}
        />
      </View>
      <View style={styles.rightContent}>
        {title ? (
          <Text
            style={[
              styles.title,
              {
                color: value
                  ? contrastColor(colors.primary, 10)
                  : colors.primary,
              },
            ]}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {title}
          </Text>
        ) : null}
        <Switch
          value={value}
          onValueChange={onToggleSwitch}
          style={styles.switch}
        />
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
    maxWidth: 250,
    width: "100%",
    alignSelf: "center",
    borderRadius: 15,
    margin: 0,
  },
  leftContent: {
    marginRight: 5,
  },
  rightContent: {
    flex: 1,
    justifyContent: "space-evenly",
    maxHeight: 70,
    height: "100%",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  icon: {
    marginRight: 5,
  },
  switch: {},
});
