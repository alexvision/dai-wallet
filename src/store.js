// Vendor
// import devToolsEnhancer from "remote-redux-devtools";
import { createStore, applyMiddleware } from "redux";

// Internal
import reducer from "./reducer";

// const middleware = applyMiddleware(devToolsEnhancer());

// const store = createStore(reducer, { state: {} }, middleware);
const store = createStore(reducer);

export default store;
