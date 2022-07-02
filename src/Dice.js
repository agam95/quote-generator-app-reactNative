import { StatusBar } from "expo-status-bar";
import react from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Boxes extends react.Component {
  render() {
    return (
      <View style={styles.circle}>
        <Image
          source={require("../assets/icon-dice.png")}
          style={styles.dice}
        />
      </View>
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
  },

  dice: {
    width: "24px",
    height: "24px",
  },
});
