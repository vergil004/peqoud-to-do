import React from "react";
import { TaskList } from "@/components/TaskList/TaskList";
import { Header } from "@/components/Header/Header";
import { ActiveTask } from "@/components/ActiveTask/ActiveTask";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div className={styles.main__left}>
          <TaskList />
        </div>
        <ActiveTask />
      </main>
    </div>
  );
};
