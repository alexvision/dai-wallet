import React from "react";
import { Button, Text, TouchableOpacity, StyleSheet, View } from "react-native";

const NUMBER_PAD_VALS = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0];

const NumberButton = val => (
  <TouchableOpacity key={val} style={styles.button}>
    <Button title={val.toString()} onPress={() => {}} />
  </TouchableOpacity>
);

const NumPad = () => {
  return (
    <View style={styles.container}>
      {NUMBER_PAD_VALS.map(NumberButton)}
      {NumberButton(">")}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%"
  },
  button: {
    minWidth: "30%"
  }
});

export default NumPad;
