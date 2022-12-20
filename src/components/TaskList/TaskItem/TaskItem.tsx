import React, { FC } from "react";
import styles from "./TaskItem.module.scss";

type TTask = {
  task: any;
};

export const TaskItem: FC<TTask> = ({ task }) => {
  return (
    <div className={styles.task}>
      <div className={styles.task__title}>{task.title}</div>
      <div>{task.description}</div>
    </div>
  );
};
