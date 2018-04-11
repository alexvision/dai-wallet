import { combineReducers } from "redux";

const defaultState = { test: "test" };

function reducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ state: reducer });

export default rootReducer;
