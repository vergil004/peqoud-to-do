import React, { FC } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { add_task } from "@/store/action-creators/ActionCreators";

const { TextArea } = Input;

type TTaskForm = {
  setModal: () => void;
};

export const AddTaskForm: FC<TTaskForm> = ({ setModal }) => {
  const dispatch: any = useDispatch();
  const onSubmitHandler = (values: any) => {
    dispatch(add_task(values));
    setModal();
  };
  return (
    <Form onFinish={onSubmitHandler}>
      <Form.Item label="Название задачи" name="title">
        <Input />
      </Form.Item>
      <Form.Item label="Описание задачи" name="description">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Сохранить</Button>
      </Form.Item>
    </Form>
  );
};
