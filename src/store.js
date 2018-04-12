// Vendor
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "remote-redux-devtools";
import { createStore, applyMiddleware } from "redux";

// Internal
import reducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

// sagaMiddleware.run(whateverSaga);

export default store;
