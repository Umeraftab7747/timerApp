import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { w, h } from "react-native-responsiveness";
import { inputBg, mainColor } from "../AppColors";
import { color } from "react-native-reanimated";
const DayActivity = () => {
  return (
    <View style={styles.mainActDiv}>
      <View style={styles.datdiv}>
        <Feather name="calendar" size={h("3.1%")} color="black" />
        <Text style={styles.dattxt}>08/03/2022</Text>
      </View>
      <View style={styles.contentdiv}>
        <View style={styles.activityinfo}>
          <Text style={styles.activityName}>Working</Text>
          <Text style={styles.activityTime}>Time</Text>
        </View>
        <View style={styles.activityinfo}>
          <Text style={styles.activityName}>Break</Text>
          <Text style={styles.activityTime}>Time</Text>
        </View>
        <View style={styles.activityinfo}>
          <Text style={styles.activityName}>End of break</Text>
          <Text style={styles.activityTime}>Time</Text>
        </View>
        <View style={styles.activityinfo}>
          <Text style={styles.activityName}>End of working</Text>
          <Text style={styles.activityTime}>Time</Text>
        </View>
      </View>
      <View style={styles.txtcont}>
        <Text style={styles.sechead}>Today’s total working time</Text>
        <Text style={styles.firhead}>7 hr 45 mins</Text>
      </View>
    </View>
  );
};

export default DayActivity;

const styles = StyleSheet.create({
  datdiv: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  dattxt: {
    marginLeft: h("1%"),
    fontSize: h("2.3%"),
  },
  mainActDiv: {
    width: w("90%"),
    height: h("45%"),
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    marginBottom: h("1%"),
  },
  contentdiv: {
    width: w("80%"),
    height: h("20%"),
    backgroundColor: inputBg,
    borderRadius: h("2%"),
  },
  activityinfo: {
    width: "93%",
    height: h("5%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  sechead: {
    fontSize: h("2.2%"),
    color: mainColor,
    textAlign: "center",
    marginBottom: h("1%"),
  },
  firhead: {
    fontSize: h("3.2%"),
    color: mainColor,
    textAlign: "center",
  },
  txtcont: {
    width: "100%",
    height: h("7%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  activityName: {
    fontSize: h("2.3%"),
    fontWeight: "700",
  },
  activityTime: {
    fontSize: h("2.3%"),
    fontWeight: "600",
  },
});
