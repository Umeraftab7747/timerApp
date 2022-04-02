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
  const [staricktext, setstaricktext] = useState("");
  const [showPaswd, setshowPaswd] = useState(true);
  //   const res = text.split("");
  //   res.map((dat) => {
  //     setstaricktext(staricktext + "*");
  //   });
  //   useEffect(() => {
  //     const res = text.split("");
  //     res.map((dat) => {
  //       setstaricktext(staricktext + "*");
  //     });
  //   }, [text]);
  console.log(staricktext);
  return (
    <View style={styles.customInptdiv}>
      <Feather name={`${iconName}`} size={h("3%")} color={mainColor} />
      <Text style={styles.custminp}>{text}</Text>
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
