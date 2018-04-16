// Vendor
import { call, put, takeEvery } from "redux-saga/effects";

// Internal
import { createWallet } from "./wallet";
import {
  WALLET_FETCH_FAILED,
  WALLET_FETCH_SUCCEEDED,
  WALLET_FETCH_REQUESTED
} from "./actions";

function* getWallet(wallet) {
  try {
    const wallet = yield call(createWallet);
    console.log('RETURNED WALLET', wallet);
    yield put({ type: WALLET_FETCH_SUCCEEDED, payload: wallet });
  } catch (err) {
    yield put({ type: WALLET_FETCH_FAILED, payload: err });
  }
}

function* walletSaga() {
  yield takeEvery(WALLET_FETCH_REQUESTED, getWallet);
}

export default walletSaga;
