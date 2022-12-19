import React, { useState } from "react";
import { Modal } from "antd";
import { AddTaskForm } from "@/components/AddTaskForm/AddTaskForm";
import styles from "./Header.module.scss";

export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.header}>
      <button
        className={styles.header__button}
        onClick={() => setModalOpen(true)}
      >
        +
      </button>
      <Modal
        title="Добавить задачу"
        open={modalOpen}
        centered
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        <AddTaskForm setModal={() => setModalOpen(false)} />
      </Modal>
    </div>
  );
};
