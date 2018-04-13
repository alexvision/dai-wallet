export const WALLET_FETCH_FAILED = "WALLET_FETCH_FAILED";
export const WALLET_FETCH_REQUESTED = "WALLET_FETCH_REQUESTED";
export const WALLET_FETCH_SUCCEEDED = "WALLET_FETCH_SUCCEEDED";

const requestWallet = () => ({
  type: WALLET_FETCH_REQUESTED
});

export { requestWallet };
