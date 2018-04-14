// Vendor
import { combineReducers } from "redux";

// Internal
import wallet from './Wallet/reducer';

const defaultState = { test: "test" };

function reducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ wallet });

export default rootReducer;
