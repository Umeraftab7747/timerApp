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
    <>
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
            <Text>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgtBtn}>
            <Text>Forgot Your Password</Text>
          </TouchableOpacity>
        </View>
        <CustomAuthBtn title="Login" onClick={onSubmit} />
      </View>
    </>
  );
};

export default AuthUserComp;

const styles = StyleSheet.create({
  heading: {
    fontSize: h("4%"),
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    fontSize: h("2.5%"),
    textAlign: "center",
  },
  inputs: {
    width: w("95%"),
    height: "45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
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
    width: "100%",
    height: h("6%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
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
  },
  introdiv: {
    width: "100%",
    height: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
