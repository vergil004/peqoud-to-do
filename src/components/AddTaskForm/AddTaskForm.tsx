import React, { FC, useCallback } from "react";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

type TTaskForm = {
  setModal: () => void;
};

export const AddTaskForm: FC<TTaskForm> = ({ setModal }) => {
  const onSubmitHandler = () => {
    setModal();
  };
  return (
    <Form onFinish={onSubmitHandler}>
      <Form.Item label="Название задачи">
        <Input />
      </Form.Item>
      <Form.Item label="Описание задачи">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Сохранить</Button>
      </Form.Item>
    </Form>
  );
};
