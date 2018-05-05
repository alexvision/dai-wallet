// Vendor
import SInfo from 'react-native-sensitive-info';
import { Wallet, providers } from "ethers";

// TODO: make async
const createWallet = async () => {
  const wallet = Wallet.createRandom();
  wallet.provider = providers.getDefaultProvider();
  const { address, privateKey } = wallet;

  console.log("WALLET:", wallet);
  console.log("starting await");
  const password = await SInfo.setItem(address, privateKey);
  console.log("finished set password", 🙀, password, 🙀 );
  window.wallet = wallet;
  return wallet;
};

const getPassword = async (address) => {
  try {
    console.log("in try");
    // Retreive the credentials
    const credentials = await SInfo.getItem(address);
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
};

export { createWallet };
