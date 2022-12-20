import { ADD_TASK } from "@/store/actions/task";

const initialTaskState = {
  tasks: [],
};

export function taskRuducer(state = initialTaskState, action) {
  switch (action.type) {
    case ADD_TASK: {
      console.log(action.task);
      return { tasks: [...state.tasks, { ...action.task }] };
    }

    default: {
      return state;
    }
  }
}
