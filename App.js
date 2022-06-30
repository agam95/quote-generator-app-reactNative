import { StatusBar } from "expo-status-bar";
import react from "react";
import { StyleSheet, Text, View } from "react-native";

import Boxes from "./src/Boxes";

export default class App extends react.Component {
  render() {
    return (
      <View style={styles.container}>
        <Boxes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "hsl(219, 17%, 16%)",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
