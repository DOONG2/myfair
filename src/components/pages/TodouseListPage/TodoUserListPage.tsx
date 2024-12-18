"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "../../../app/theme";
import { TODO_PLACEHOLDER } from "../../../constants/text";
import CloseSvg from "../../../icons/CloseSvg";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  margin-top: 128px;

  color: ${theme.textTitleColor};
  font-weight: 700;
  font-size: 56px;
  line-height: 72px;
`;
const TextInputInner = styled.div`
  padding: 32px;
  margin-top: 64px;
  width: 737px;
  height: 92px;

  background: ${theme.bgPrimaryColor};
  border-radius: 24px;
`;
const Input = styled.input`
  width: 100%;

  outline: none;
  border: none;
  background-color: ${theme.bgPrimaryColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const ToDoDashboard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  padding: 32px;
  gap: 32px;

  border-radius: 24px;

  box-shadow: 0px 16px 32px 0px var(--blackAlpha/100);
  box-shadow: 0px 0px 6px 0px var(--blackAlpha/50);
`;

const BadgeList = styled.div`
  display: flex;
  justify-content: center;
`;

const Badge = styled.div<{ isActivated: boolean }>`
  width: 108px;
  height: 40px;
  padding: 8px 32px 8px 32px;
  border-radius: 12px;

  background-color: ${props =>
    props.isActivated ? theme.bgBadgeActiveColor : ""};
  color: ${props => (props.isActivated ? theme.textBadgeActiveColor : "")};

  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;

  :hover {
    cursor: pointer;
  }
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 737px;

  font-size: 20px;
  font-weight: 400;
`;
const TodoListTitle = styled.div`
  padding: 16px;
`;
const Todo = styled.div`
  padding: 32px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TodoText = styled.div`
  flex-grow: 1;
  font-size: 20px;
  font-weight: 400;
`;

const CheckIcon = styled.div`
  width: 32px;
  height: 32px;

  border: 1px solid ${theme.borderPrimaryColor};
  border-radius: 100%;

  :hover {
    cursor: pointer;
  }
`;
const CloseIcon = styled(CloseSvg)`
  :hover {
    cursor: pointer;
  }
`;

interface TodoUserListPageProps {}

const ActivatedBades = {
  ALL_: "All",
  TODO_: "To Do",
  DONE_: "Done",
};
type ActivatedBadgeType = keyof typeof ActivatedBades;

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
        <BadgeList>
          {Object.keys(ActivatedBades)
            .filter((key): key is ActivatedBadgeType => key in ActivatedBades)
            .map(key => (
              <Badge
                key={`todoPadge-badge-${key}`}
                onClick={() => {
                  setActivatedBadge(key);
                }}
                isActivated={key === activatedBadge}
              >
                {ActivatedBades[key]}
              </Badge>
            ))}
        </BadgeList>
        <TodoList>
          <TodoListTitle>총 3개</TodoListTitle>
          <Todo>
            <CheckIcon />
            <TodoText>출근하고 비타민 먹기</TodoText>
            <CloseIcon />
          </Todo>
          <Todo>
            <CheckIcon />
            <TodoText>Daily Scrum 작성하기</TodoText>
            <CloseIcon />
          </Todo>
          <Todo>
            <CheckIcon />
            <TodoText>주간회의 참여하기</TodoText>
            <CloseIcon />
          </Todo>
        </TodoList>
      </ToDoDashboard>
    </Container>
  );
};

export default TodoUserListPage;
