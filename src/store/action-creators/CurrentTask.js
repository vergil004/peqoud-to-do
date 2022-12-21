import { SET_CURRENT_TASK } from "@/store/actions/CurrentTask";

export const setCurrentTask = (task) => {
  console.log(task);
  return {
    type: SET_CURRENT_TASK,
    task: task,
  };
};
