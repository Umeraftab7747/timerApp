import { StyleSheet, Text, View, StatusBar } from "react-native";
import MyStackNavig from "./src/AppNavigation/MyStackNavig";
import ActivityScreen from "./src/Views/ActivityScreen";
import AuthScreen from "./src/Views/AuthScreen";
import TimerScreen from "./src/Views/TimerScreen";
export default function App() {
  return (
    <>
      <StatusBar />
      {/* <AuthScreen /> */}
      {/* <TimerScreen /> */}
      <MyStackNavig />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
