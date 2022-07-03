import { StatusBar } from "expo-status-bar";
import react from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { test } from "./Boxes";

export default class Dice extends react.Component {
  render() {
    return (
      <Pressable style={styles.circle} onPress={test}>
        <Image
          source={require("../assets/icon-dice.png")}
          style={styles.dice}
        />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "hsl(150, 100%, 66%)",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    position: "relative",
    bottom: "-60px",
    cursor: "pointer",
  },

  dice: {
    width: "24px",
    height: "24px",
  },
});
