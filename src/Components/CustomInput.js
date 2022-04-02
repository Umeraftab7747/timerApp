import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { inputBg, mainColor } from "../AppColors";
import { w, h } from "react-native-responsiveness";
const CustomInput = ({ iconName }) => {
  return (
    <View style={styles.customInptdiv}>
      <Feather name={`${iconName}`} size={h("3%")} color={mainColor} />
      <TextInput style={styles.custminp} placeholder="enter paswword" />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  customInptdiv: {
    width: w("94%"),
    borderRadius: h("1%"),
    backgroundColor: inputBg,
    height: h("5%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignSelf: "center",
  },
  custminp: {
    width: "86%",
    height: "100%",
    backgroundColor: "transparent",
  },
});
