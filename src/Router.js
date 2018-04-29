// Vendor
import { StackNavigator } from "react-navigation";

// Internal
import CreateWallet from "./Setup/Create/Create";
import Homepage from "./Homepage/Container";
import ImportWallet from './Setup/Import/Import';
import Setup from "./Setup/Container";

export default StackNavigator(
  {
    Home: {
      screen: Homepage
    },
    Setup: {
      screen: Setup
    },
    ImportWallet: {
      screen: ImportWallet
    },
    CreateWallet: { 
      screen: CreateWallet
    }
  },
  {
    initialRouteName: "Setup"
  }
);
