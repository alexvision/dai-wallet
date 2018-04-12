// Vendor
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Provider } from 'react-redux';
import { StackNavigator } from "react-navigation";
import { Wallet } from "ethers";

// Internal
import Homepage from './Homepage/Container';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Homepage />
      </Provider>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: App
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
