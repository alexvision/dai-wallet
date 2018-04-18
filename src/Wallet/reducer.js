// Internal 
import {
  WALLET_FETCH_FAILED,
  WALLET_FETCH_SUCCEEDED,
  WALLET_FETCH_REQUESTED
} from "./actions";

const defaultState = {};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case WALLET_FETCH_SUCCEEDED: 
      console.log('REDUCING', action.payload);
      const { address, mnemonic, privateKey } = action.payload;
      return {
        address,
        mnemonic,
        privateKey
      }
    default:
      return state;
  }
}

export default reducer;
