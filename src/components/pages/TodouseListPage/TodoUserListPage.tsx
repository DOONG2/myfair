"use client";
import React, { useMemo, useState } from "react";
import TodoUserBadgeList from "./TodoUserBadgeList";
import { Container, Title, ToDoDashboard } from "./style";
import TodoUserTextInput from "./TodoUserTextInput";
import TodoUserList from "./TodoUserList";

interface TodoUserListPageProps {}

export const ActivatedBadges = {
  ALL_: "All",
  TODO_: "To Do",
  DONE_: "Done",
} as const;

export type ActivatedBadgeType = keyof typeof ActivatedBadges;
export type TodoType = {
  type: ActivatedBadgeType;
  text: string;
};

const TodoUserListPage = ({}: TodoUserListPageProps) => {
  const [activatedBadge, setActivatedBadge] =
    useState<ActivatedBadgeType>("ALL_");
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const [todoInputValue, setTodoInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Container>
      <Title>To Do List</Title>
      <TodoUserTextInput
        isValid={isValid}
        errorMessage={errorMessage}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        setIsValid={setIsValid}
        setErrorMessage={setErrorMessage}
        setTodoList={setTodoList}
      />
      <ToDoDashboard>
        <TodoUserBadgeList
          activatedBadge={activatedBadge}
          setActivatedBadge={setActivatedBadge}
        />
        <TodoUserList
          todoList={todoList}
          activatedBadge={activatedBadge}
          setTodoList={setTodoList}
        />
      </ToDoDashboard>
    </Container>
  );
};

export default TodoUserListPage;
