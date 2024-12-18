"use client";
import React, { useState } from "react";
import { TODO_PLACEHOLDER } from "../../../constants/text";
import TodoUserBadgeList from "./TodoUserBadgeList";
import {
  CheckIconInner,
  CloseIcon,
  Container,
  Input,
  TextInputInner,
  Title,
  Todo,
  ToDoDashboard,
  TodoList,
  TodoListTitle,
  TodoText,
} from "./style";

interface TodoUserListPageProps {}

export const ActivatedBadges = {
  ALL_: "All",
  TODO_: "To Do",
  DONE_: "Done",
};
export type ActivatedBadgeType = keyof typeof ActivatedBadges;

const TodoUserListPage = ({}: TodoUserListPageProps) => {
  const [activatedBadge, setActivatedBadge] =
    useState<ActivatedBadgeType>("ALL_");
  return (
    <Container>
      <Title>To Do List</Title>
      <TextInputInner>
        <Input placeholder={TODO_PLACEHOLDER} />
      </TextInputInner>
      <ToDoDashboard>
        <TodoUserBadgeList
          activatedBadge={activatedBadge}
          setActivatedBadge={setActivatedBadge}
        />
        <TodoList>
          <TodoListTitle>총 3개</TodoListTitle>
          <Todo>
            <CheckIconInner />
            <TodoText>출근하고 비타민 먹기</TodoText>
            <CloseIcon />
          </Todo>
          <Todo>
            <CheckIconInner />
            <TodoText>Daily Scrum 작성하기</TodoText>
            <CloseIcon />
          </Todo>
          <Todo>
            <CheckIconInner />
            <TodoText>주간회의 참여하기</TodoText>
            <CloseIcon />
          </Todo>
        </TodoList>
      </ToDoDashboard>
    </Container>
  );
};

export default TodoUserListPage;
