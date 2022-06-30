import { StatusBar } from "expo-status-bar";
import react from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Boxes extends react.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Advice go here</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
    padding: 5,
    border: "1px solid red",
  },

  box: {
    width: "100px",
    height: "100px",
  },

  inner: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
