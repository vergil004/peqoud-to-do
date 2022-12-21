import { SET_CURRENT_TASK } from "@/store/actions/CurrentTask";

const initialCurrentState = {
  task: null,
};

export function CurrentTaskReducer(state = initialCurrentState, action) {
  switch (action.type) {
    case SET_CURRENT_TASK: {
      return {
        task: action.task,
      };
    }
    default: {
      return state;
    }
  }
}
