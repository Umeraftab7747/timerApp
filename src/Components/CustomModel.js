import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";

const CustomModel = ({ show, toggleModal, children }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={toggleModal}
    >
      <View style={styles.bgdiv}>{children}</View>
    </Modal>
  );
};

export default CustomModel;

const styles = StyleSheet.create({
  bgdiv: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
