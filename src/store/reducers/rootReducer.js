import { combineReducers } from "redux";
import { taskRuducer } from "@/store/reducers/TaskReducer";
import { CurrentTaskReducer } from "@/store/reducers/CurrentTaskReducer";

export const rootReducer = combineReducers({
  tasks: taskRuducer,
  currentTask: CurrentTaskReducer,
});
