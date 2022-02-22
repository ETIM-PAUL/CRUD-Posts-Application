import { combineReducers } from "redux";
import { postReducer, selectedPostReducer, addPostReducer } from "./postReducer";

export const reducer = combineReducers({
  allPosts: postReducer,
  post:selectedPostReducer,
  // addedpost:addPostReducer

  // product: selectedProductsReducer,
});

// export default reducers;