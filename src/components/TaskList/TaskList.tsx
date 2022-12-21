import React from "react";
import { useSelector } from "react-redux";
import { TaskItem } from "@/components/TaskList/TaskItem/TaskItem";
import styles from "./TaskList.module.scss";
export const TaskList = () => {
  const { tasks } = useSelector((state: any) => {
    return state.tasks;
  });
  return (
    <ul className={styles.taskList}>
      {tasks.map((task: any, index: any) => (
        <li key={index} className={styles.taskList__item}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
};
