import { createStore, combineReducers } from "redux";
import productListReducer from "./reducers/productList";
import productAddReducer from "./reducers/productAdd";

const reducer = combineReducers({
  productAdd: productAddReducer,
  productList: productListReducer
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
