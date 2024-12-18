"use client";
import React, { useCallback, useState } from "react";
import { TODO_PLACEHOLDER } from "../../../constants/text";
import TodoUserBadgeList from "./TodoUserBadgeList";
import {
  CheckIcon,
  CheckIconInner,
  CloseIcon,
  Container,
  Input,
  TextForm,
  TextInputInner,
  Title,
  Todo,
  ToDoDashboard,
  TodoInputErrorMessage,
  TodoList,
  TodoListTitle,
  TodoText,
} from "./style";

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

  const handleChangeTodoInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setTodoInputValue(value);

      if (value.length > 20) {
        console.log("here");
        setIsValid(false);
        setErrorMessage("20글자를 초과할 수 없습니다.");
      } else {
        setIsValid(true);
        setErrorMessage("");
      }
    },
    []
  );

  const handleSubmitTodoInput = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isValid) return;
      setTodoList(todoList => [
        ...todoList,
        { type: "TODO_", text: todoInputValue },
      ]);
      setTodoInputValue("");
    },
    [todoInputValue, isValid]
  );

  console.log(todoList);
  return (
    <Container>
      <Title>To Do List</Title>

      <TextInputInner>
        <TextForm onSubmit={handleSubmitTodoInput}>
          <Input
            value={todoInputValue}
            onChange={handleChangeTodoInput}
            placeholder={TODO_PLACEHOLDER}
          />
          {!isValid && (
            <TodoInputErrorMessage>{errorMessage}</TodoInputErrorMessage>
          )}
        </TextForm>
      </TextInputInner>
      <ToDoDashboard>
        <TodoUserBadgeList
          activatedBadge={activatedBadge}
          setActivatedBadge={setActivatedBadge}
        />
        <TodoList>
          <TodoListTitle>{`총 ${todoList.length}개`}</TodoListTitle>
          {todoList.map(({ type, text }, idx) => (
            <Todo key={`todo-${idx}`}>
              <CheckIconInner>
                {type === "DONE_" && <CheckIcon />}
              </CheckIconInner>
              <TodoText>{text}</TodoText>
              <CloseIcon />
            </Todo>
          ))}
        </TodoList>
      </ToDoDashboard>
    </Container>
  );
};

export default TodoUserListPage;
