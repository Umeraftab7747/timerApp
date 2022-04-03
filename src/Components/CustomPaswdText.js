import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { inputBg, mainColor } from "../AppColors";
import { w, h } from "react-native-responsiveness";
const CustomPaswdText = ({ iconName, text }) => {
  const [ishidden, setishidden] = useState(true);
  const hashtext = "****************************************";
  return (
    <View style={styles.customInptdiv}>
      <Feather name={`${iconName}`} size={h("3%")} color={mainColor} />
      <Text style={styles.custminp}>
        {ishidden ? hashtext.slice(0, text.length) : text}
      </Text>
      <TouchableOpacity
        style={styles.inpBtn}
        onPress={() => setishidden(!ishidden)}
      >
        <Feather
          name={ishidden ? "eye-off" : "eye"}
          size={h("2.5%")}
          color={mainColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomPaswdText;

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
    width: "76%",
    backgroundColor: "transparent",
  },
  inpBtn: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "8%",
  },
});
