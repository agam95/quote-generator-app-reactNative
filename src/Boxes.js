import { StatusBar } from "expo-status-bar";
import react from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Dice from "./Dice";

export default class Boxes extends react.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.header}>Advice #117</Text>
        <Text style={styles.advice}>
          It is easy to sit up and take notice, what's difficult is getting uu
          and taking action
        </Text>
        <Dice />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: "340px",
    height: "310px",
    backgroundColor: "hsl(217, 19%, 24%)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },

  header: {
    color: "hsl(150, 100%, 66%)",
  },

  advice: {
    color: "whitesmoke",
    fontSize: "20px",
    textAlign: "center",
    width: "90%",
    height: "125px",
  },
});
