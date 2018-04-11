// Vendor
import {
  setGenericPassword,
  getGenericPassword
} from "react-native-keychain";
import { Wallet } from "ethers";

// TODO: make async
const createWallet = () => {
  const wallet = Wallet.createRandom();
  const { address, privateKey } = wallet;
  return wallet;

  console.log('WALLET:', wallet);
  
  // Store the credentials
  // await setGenericPassword(address, privateKey);
  
  // try {
  //   // Retreive the credentials
  //   const credentials = await getGenericPassword();
  //   if (credentials) {
  //     console.log(
  //       "Credentials successfully loaded for address " + credentials.username
  //     );
  //     return wallet;
  //   } else {
  //     console.log("No credentials stored");
  //   }
  // } catch (error) {
  //   console.log("Keychain couldn't be accessed!", error);
  // }
};

export { createWallet };
