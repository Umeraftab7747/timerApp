import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { mainColor, screenBg } from "../AppColors";
const CustomAuthBtn = ({ title, onClick }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onClick}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomAuthBtn;

const styles = StyleSheet.create({
  btn: {
    height: h("5%"),
    width: "75%",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    backgroundColor: mainColor,
    justifyContent: "center",
    borderRadius: h("1%"),
  },
  text: {
    fontSize: h("2.8%"),
    fontWeight: "bold",
    color: screenBg,
  },
});
