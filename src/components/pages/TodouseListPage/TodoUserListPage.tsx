"use client";
import React, { useEffect, useState } from "react";
import TodoUserBadgeList from "./TodoUserBadgeList";
import { Container, Title, ToDoDashboard } from "./style";
import TodoUserTextInput from "./TodoUserTextInput";
import TodoUserList from "./TodoUserList";
import guardLocalStorage from "../../../shared/guardLocalStorage";
import { TODO_LIST_KEY } from "../../../constants/key";

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
  const [todoList, setTodoList] = useState<TodoType[]>(
    JSON.parse(guardLocalStorage(TODO_LIST_KEY) ?? "[]")
  );

  const [todoInputValue, setTodoInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Container>
      <Title>To Do List</Title>
      <TodoUserTextInput
        isValid={isValid}
        errorMessage={errorMessage}
        todoInputValue={todoInputValue}
        todoList={todoList}
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
