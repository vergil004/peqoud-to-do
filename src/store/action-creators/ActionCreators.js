import { ADD_TASK } from "@/store/actions/task";

export const add_task = (values) => {
  console.log(values);
  return {
    type: ADD_TASK,
    task: values,
  };
};
