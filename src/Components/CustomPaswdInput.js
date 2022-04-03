import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { inputBg, mainColor } from "../AppColors";
import { w, h } from "react-native-responsiveness";
const CustomPaswdInput = ({ iconName }) => {
  const [showPaswd, setshowPaswd] = useState(true);
  return (
    <View style={styles.customInptdiv}>
      <Feather name={`${iconName}`} size={h("3%")} color={mainColor} />
      <TextInput
        style={styles.custminp}
        placeholder="enter paswword"
        secureTextEntry={showPaswd}
      />
      <TouchableOpacity
        style={styles.inpBtn}
        onPress={() => setshowPaswd(!showPaswd)}
      >
        <Feather
          name={showPaswd ? "eye-off" : "eye"}
          size={h("2.5%")}
          color={mainColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomPaswdInput;

const styles = StyleSheet.create({
  customInptdiv: {
    width: w("90%"),
    backgroundColor: inputBg,
    borderRadius: h("1%"),
    height: h("6%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignSelf: "center",
  },
  custminp: {
    width: "76%",
    height: "100%",
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
