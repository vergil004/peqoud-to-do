import React from "react";
import { useSelector } from "react-redux";

import { TaskItem } from "@/components/TaskList/TaskItem/TaskItem";

export const TaskList = () => {
  const { tasks } = useSelector((state: any) => {
    return state.tasks;
  });
  return (
    <ul>
      {tasks.map((task: any, index: any) => (
        <li key={index}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
};
