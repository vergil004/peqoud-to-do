import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ActiveTask.module.css";
import { setCurrentTask } from "@/store/action-creators/CurrentTask";

export const ActiveTask = () => {
  const { task } = useSelector((state: any) => {
    return state.currentTask;
  });
  const { tasks } = useSelector((state: any) => {
    return state.tasks;
  });
  const dispatch: any = useDispatch();

  useEffect(() => {
    if (task === null && tasks.length > 0) {
      dispatch(setCurrentTask(tasks[0]));
    }
  });

  if (task === null) {
    return <div>Здесь нет задач</div>;
  }
  return <div className={styles.activeTask}>{task.title}</div>;
};
