// Vendor
import React from "react";
import { Provider } from 'react-redux';
import { Button, StyleSheet, Text, View } from "react-native";
import { Wallet } from "ethers";

// Internal
import Homepage from './Homepage/Container';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Homepage />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
