import { ADD_TASK } from "@/store/actions/Task";

export const add_task = (values, key) => {
  return {
    type: ADD_TASK,
    task: { ...values, key },
  };
};
