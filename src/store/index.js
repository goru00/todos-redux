import { combineReducers } from "redux";
import { todos } from "./todos/reducers-todo";
import { filters } from "./filters/reducers-filter";

export default combineReducers({
  todos,
  filters
});
