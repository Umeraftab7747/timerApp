import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { mainColor, screenBg } from "../AppColors";
import { w, h } from "react-native-responsiveness";
import DayActivity from "../Components/DayActivity";
const ActivityScreen = ({ navigation }) => {
  const mydat = [{ key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }];
  return (
    <SafeAreaView style={styles.mainDiv}>
      <Text style={styles.heading}>Activity</Text>
      <Text style={styles.username}>Jhon Doe</Text>
      <FlatList
        data={mydat}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <DayActivity />}
      />
    </SafeAreaView>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  mainDiv: {
    width: "100%",
    height: "100%",
    backgroundColor: screenBg,
  },
  heading: {
    fontSize: h("4%"),
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: h("1.5%"),
  },
  username: {
    fontSize: h("2.6%"),
    fontWeight: "bold",
    textAlign: "center",
    color: mainColor,
    marginBottom: h("1.5%"),
  },
});
