import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import { inputBg, mainColor } from "../AppColors";
import { w, h } from "react-native-responsiveness";
const CustomLoginUser = () => {
  return (
    <View style={styles.customInptdiv}>
      <View style={styles.custminp}>
        <Text>hy</Text>
      </View>
      <TouchableOpacity
        style={styles.inpBtn}
        onPress={() => setshowPaswd(!showPaswd)}
      >
        <AntDesign name="caretdown" size={h("2.3%")} color={mainColor} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomLoginUser;

const styles = StyleSheet.create({
  customInptdiv: {
    width: w("94%"),
    backgroundColor: inputBg,
    borderRadius: h("1%"),
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
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  inpBtn: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "8%",
  },
});
