import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { screenBg } from "../AppColors";
import AuthUserComp from "../Components/AuthUserComp";
import AuthAdminComp from "../Components/AuthAdminComp";

const AuthScreen = ({ navigation }) => {
  const [isAdminlayout, setisAdminlayout] = useState(true);
  return (
    <SafeAreaView style={styles.mainDiv}>
      {isAdminlayout ? (
        <AuthAdminComp
          onOther={() => setisAdminlayout(false)}
          onSubmit={() => navigation.navigate("Client")}
        />
      ) : (
        <AuthUserComp onSubmit={() => navigation.navigate("Client")} />
      )}
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
