import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { inputBg, screenBg } from "../AppColors";
const CustomKeyBtn = ({ title, onPressfun }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.customKey,
        backgroundColor: title === " " ? screenBg : inputBg,
      }}
      onPress={onPressfun}
    >
      <Text style={title === "Clear" ? styles.text2 : styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomKeyBtn;

const styles = StyleSheet.create({
  customKey: {
    width: w("20%"),
    height: w("20%"),
    borderRadius: w("2%"),
    marginBottom: h("1%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: w("7%"),
  },
  text2: {
    fontSize: w("5%"),
  },
});
