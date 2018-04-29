import React from "react";
import { Button, Text, View } from "react-native";

const Setup = ({ navigation }) => (
  <View>
    <Text>You'll need to setup a wallet to proceed</Text>
    <Button
      onPress={() => {
        navigation.navigate("ImportWallet");
      }}
      title="Import Existing Wallet"
    />
    <Button
      onPress={() => {
        navigation.navigate("CreateWallet");
      }}
      title="Create New Wallet"
    />
  </View>
);

export default Setup;
