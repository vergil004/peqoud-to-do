import { combineReducers } from "redux";
import { taskRuducer } from "@/store/reducers/TaskReducer";

export const rootReducer = combineReducers({
  tasks: taskRuducer,
});
