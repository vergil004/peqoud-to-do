import { ADD_TASK } from "@/store/actions/Task";

const initialTaskState = {
  tasks: [],
};

export function taskRuducer(state = initialTaskState, action) {
  switch (action.type) {
    case ADD_TASK: {
      return { tasks: [...state.tasks, { ...action.task }] };
    }

    default: {
      return state;
    }
  }
}
