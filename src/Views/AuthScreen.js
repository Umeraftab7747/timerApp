import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import { screenBg } from "../AppColors";
import AuthUserComp from "../Components/AuthUserComp";
import AuthAdminComp from "../Components/AuthAdminComp";

const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.mainDiv}>
      {/* <AuthUserComp /> */}
      <AuthAdminComp />
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  mainDiv: {
    width: "100%",
    height: "100%",
    backgroundColor: screenBg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
