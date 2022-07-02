import { StatusBar } from "expo-status-bar";
import react from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class PatternDivider extends react.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="295" height="16">
        <g fill="none" fillRule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zm173 0h122v1H173z"></path>
          <g fill="#CEE3E9" transform="translate(138)">
            <rect width="6" height="16" rx="3"></rect>
            <rect width="6" height="16" x="14" rx="3"></rect>
          </g>
        </g>
      </svg>
    );
  }
}

const styles = StyleSheet.create({});
