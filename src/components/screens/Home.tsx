import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, Title } from "react-native-paper";
import Wave from "@components/UI/Wave";
import { MainScreens } from "@resources/screens";
import { MainStackProp } from "@resources/stacks";
import { getText } from "@resources/texts";

type HomeProps = {
  navigation: MainStackProp<MainScreens.HOME>;
};

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Title style={styles.title}>Domotics APP</Title>
        <Text>{getText("Hi! welcome to our project")}</Text>
        <Text></Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          compact
          mode="contained"
          onPress={useCallback(() => {
            navigation.navigate(MainScreens.SERVICES);
          }, [])}
        >
          {getText(MainScreens.SERVICES)}
        </Button>
        <Button
          compact
          mode="contained"
          onPress={useCallback(() => {
            navigation.navigate(MainScreens.REPORTS);
          }, [])}
        >
          {getText(MainScreens.REPORTS)}
        </Button>
      </View>
      <Wave />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textContainer: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {},
});
