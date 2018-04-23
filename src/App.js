// Vendor
import React from "react";
import { StyleSheet, Text } from "react-native";
import { Provider } from "react-redux";
import { Wallet } from "ethers";

// Internal
import Homepage from "./Homepage/Container";
import RootStack from "./Router";
import store from "./store";
import { requestWallet } from "./Wallet/actions";

class App extends React.Component {
  constructor() {
    super();
    // Setting initial state at the highest level component in the application
    store.dispatch(requestWallet());
  }
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
