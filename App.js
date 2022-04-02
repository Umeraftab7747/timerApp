import { StyleSheet, Text, View, StatusBar } from "react-native";
import AuthScreen from "./src/Views/AuthScreen";
export default function App() {
  return (
    <>
      <StatusBar />
      <AuthScreen />
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
