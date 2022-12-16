import React from "react";
import styles from "./TaskItem.module.scss";

export const TaskItem = () => {
  return (
    <div className={styles.task}>
      <div className={styles.task__title}>Название задачи</div>
    </div>
  );
};
