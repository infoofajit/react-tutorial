import { combineReducers } from "redux";
import count from "./count";
import todo from "./todo";

const rootReducers = combineReducers({
  count: count,
  todo: todo
})

export default rootReducers