import { combineReducers } from "redux";
import { savingsReducer } from "./ridersReducer";

export const reducer = combineReducers({
  allUsers: savingsReducer,
});
