// Vendor
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
// import { Wallet } from "ethers";

// Internal
import { createWallet } from "../Wallet/wallet";
import NumPad from "./NumPad";

export default class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: null
    };
  }
  render() {
    const balancePromise = window.wallet.getBalance();
    balancePromise.then(bigNumBalance => {
      const balance = Number(bigNumBalance);
      if (Number.isInteger(balance) && balance !== this.state.balance) {
        this.setState({ balance });
      }
    });

    return (
      <View style={styles.container}>
        <Text>Address: {window.wallet.address}</Text>
        <Text>Balance: {this.state.balance}</Text>
        <NumPad />
      </View>
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
