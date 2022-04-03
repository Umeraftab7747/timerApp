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
const CustomLoginUser = ({ istimer, title }) => {
  return (
    <View
      style={{
        ...styles.customInptdiv,
        width: istimer ? "90%" : w("90%"),
      }}
    >
      <View style={styles.custminp}>
        <Text style={styles.title}>{title}</Text>
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
    backgroundColor: inputBg,
    borderRadius: h("1%"),
    height: h("6%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: h("1%"),
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
