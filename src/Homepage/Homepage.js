// Vendor
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
// import { Wallet } from "ethers";

// Internal
import { createWallet } from '../Wallet/wallet';

export default class App extends React.Component {
  constructor() {
    super();
    const wallet = createWallet();
    console.log("WALLET", wallet)
    this.state = {
      wallet
    };
  }
  render() {
    return <View style={styles.container}>
        <Text>Address: {this.state.wallet.address}</Text>
        <Text>Props: {JSON.stringify(this.props)}</Text>
        <Button title="Hello" onPress={() => {}} />
      </View>;
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
