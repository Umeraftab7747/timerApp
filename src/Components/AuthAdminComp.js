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
import CustomKeyBtn from "./CustomKeyBtn";
import CustomLoginUser from "./CustomLoginUser";
import CustomPaswdText from "./CustomPaswdText";

const AuthAdminComp = ({ onSubmit, onOther }) => {
  const [inputpaswd, setinputpaswd] = useState("");
  const btnsArr = [
    { title: "1", onPressfun: () => setinputpaswd(inputpaswd + "1") },
    { title: "2", onPressfun: () => setinputpaswd(inputpaswd + "2") },
    { title: "3", onPressfun: () => setinputpaswd(inputpaswd + "3") },
    { title: "4", onPressfun: () => setinputpaswd(inputpaswd + "4") },
    { title: "5", onPressfun: () => setinputpaswd(inputpaswd + "5") },
    { title: "6", onPressfun: () => setinputpaswd(inputpaswd + "6") },
    { title: "7", onPressfun: () => setinputpaswd(inputpaswd + "7") },
    { title: "8", onPressfun: () => setinputpaswd(inputpaswd + "8") },
    { title: "9", onPressfun: () => setinputpaswd(inputpaswd + "9") },
    { title: " ", onPressfun: () => console.log(" ") },
    { title: "0", onPressfun: () => setinputpaswd(inputpaswd + "0") },
    { title: "Clear", onPressfun: () => setinputpaswd("") },
  ];

  return (
    <>
      <View style={styles.introdiv}>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.desc}>Log in to access to your timer</Text>
      </View>
      <View style={styles.inputs}>
        <View>
          <Text style={styles.labl}>Choose a user</Text>
          <CustomLoginUser />
        </View>
        <View>
          <Text style={styles.labl}>Password</Text>
          <CustomPaswdText iconName="lock" text={inputpaswd} />
        </View>
        <CustomAuthBtn title="Login" onClick={onSubmit} />
      </View>
      <View style={styles.keyborddiv}>
        {btnsArr.map((dat, index) => (
          <CustomKeyBtn
            key={index}
            title={dat.title}
            onPressfun={dat.onPressfun}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.emailbtn} onPress={onOther}>
        <Text style={styles.emailtxt}>Login with Email</Text>
      </TouchableOpacity>
    </>
  );
};

export default AuthAdminComp;

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
  introdiv: {
    width: "100%",
    height: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  keyborddiv: {
    width: "70%",
    height: h("45%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  inputs: {
    width: "100%",
    height: h("30%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  emailbtn: {
    width: "70%",
    height: h("4%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: h("2%"),
  },
  emailtxt: {
    fontSize: h("2.7%"),
    color: mainColor,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
