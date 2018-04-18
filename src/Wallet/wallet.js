// Vendor
import {
  setGenericPassword,
  getGenericPassword
} from "react-native-keychain";
import { Wallet, providers } from "ethers";

// TODO: make async
const createWallet = async () => {
  const wallet = Wallet.createRandom();
  wallet.provider = providers.getDefaultProvider();
  const { address, privateKey } = wallet;

  console.log('WALLET:', wallet);
  console.log('starting await');
  // await setGenericPassword(address, privateKey);
  console.log('finished set password');
  window.wallet = wallet;
  return wallet;  
};

const getPassword = async () => { 
  try {
    console.log('in try');
    // Retreive the credentials
    const credentials = await getGenericPassword();
    if (credentials) {
      console.log(
        "Credentials successfully loaded for address " + credentials.username
      );
      return wallet;
    } else {
      console.log("No credentials stored");
    }
  } catch (error) {
    console.log("Keychain couldn't be accessed!", error);
  }
}

export { createWallet };
