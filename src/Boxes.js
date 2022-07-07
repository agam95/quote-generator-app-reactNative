import { StatusBar } from "expo-status-bar";
import react, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import Dice from "./Dice";
import PatternDivider from "./PatternDivider";

const Boxes = () => {
  const [apiText, setApiText] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action"
  );
  const [apiAdvice, setApiAdvice] = useState("117");

  function button() {
    async function getUrl() {
      const url = "https://api.adviceslip.com/advice";
      const response = await fetch(url);
      const data = await response.json();
      setApiText(data.slip.advice);
      setApiAdvice(data.slip.id);
    }
    getUrl();
  }
  return (
    <View style={styles.box}>
      <Text style={styles.header}>{apiAdvice}</Text>
      <Text style={styles.advice}>{apiText}</Text>
      <PatternDivider />
      <Dice button={button} />
    </View>
  );
};

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
    marginBottom: "30px",
  },

  advice: {
    color: "whitesmoke",
    fontSize: "20px",
    textAlign: "center",
    width: "90%",
    height: "125px",
  },
});

export default Boxes;
