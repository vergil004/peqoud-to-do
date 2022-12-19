import React from "react";
import { TaskList } from "@/components/TaskList/TaskList";
import { Header } from "@/components/Header/Header";
import "../../App.css";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
};
