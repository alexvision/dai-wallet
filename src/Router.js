// Vendor
import { StackNavigator } from "react-navigation";

// Internal
import Homepage from "./Homepage/Container";
import Setup from "./Setup/Container";

export default StackNavigator(
  {
    Home: {
      screen: Homepage
    },
    Setup: {
      screen: Setup
    }
  },
  {
    initialRouteName: "Setup"
  }
);
