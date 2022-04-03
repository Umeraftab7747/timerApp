import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomPaswdInput from "./CustomPaswdInput";
import { w, h } from "react-native-responsiveness";
import CustomAuthBtn from "./CustomAuthBtn";
import { inputBg, mainColor } from "../AppColors";
const AuthUserComp = ({ onSubmit }) => {
  const [isRemember, setisRemember] = useState(false);
  return (
    <View style={styles.Container}>
      <View style={styles.introdiv}>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.desc}>Log in to access to your timer</Text>
      </View>
      <View style={styles.inputs}>
        <View>
          <Text style={styles.labl}>Email</Text>
          <CustomInput iconName="mail" />
        </View>
        <View>
          <Text style={styles.labl}>Password</Text>
          <CustomPaswdInput iconName="lock" />
        </View>
        <View style={styles.btnsDiv}>
          <TouchableOpacity
            style={styles.remberbtn}
            onPress={() => setisRemember(!isRemember)}
          >
            <View
              style={
                isRemember ? [styles.emptybox, styles.active] : styles.emptybox
              }
            />
            <Text style={styles.rememberme}>remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgtBtn}>
            <Text style={styles.Ftext}>Forgot Your Password</Text>
          </TouchableOpacity>
        </View>
        <CustomAuthBtn title="Log in" onClick={onSubmit} />
      </View>
    </View>
  );
};

export default AuthUserComp;

const styles = StyleSheet.create({
  heading: {
    fontSize: h("5%"),
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    fontSize: h("2.4%"),
    textAlign: "center",
  },
  inputs: {
    width: w("95%"),
    height: "45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    // backgroundColor: "green",
  },
  emptybox: {
    width: h("2%"),
    height: h("2%"),
    borderRadius: h("4%"),
    backgroundColor: inputBg,
    overflow: "hidden",
    marginRight: h("1%"),
  },
  active: { backgroundColor: mainColor },
  btnsDiv: {
    width: "95%",
    height: h("6%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    // backgroundColor: "red",
  },
  remberbtn: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  forgtBtn: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  labl: {
    marginBottom: h("1%"),
    fontWeight: "bold",
    fontSize: h("2.1%"),
  },
  introdiv: {
    width: "100%",
    height: "20%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    // backgroundColor: "red",
    justifyContent: "center",
    marginTop: h("8%"),
  },
  Container: {
    flex: 1,
    alignItems: "center",
  },
  Ftext: {
    color: mainColor,
    fontSize: h("2%"),
    fontWeight: "500",
  },
  rememberme: {
    color: "#000",
    fontSize: h("2%"),
    fontWeight: "500",
  },
});
