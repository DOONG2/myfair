import { useCallback, useMemo } from "react";
import {
  CheckIcon,
  CheckIconInner,
  CloseIcon,
  Todo,
  TodoList,
  TodoListTitle,
  TodoText,
} from "./style";
import { ActivatedBadgeType, TodoType } from "./TodoUserListPage";

interface TodoUserListProps {
  todoList: TodoType[];
  activatedBadge: ActivatedBadgeType;
  setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export default function TodoUserList({
  todoList,
  activatedBadge,
  setTodoList,
}: TodoUserListProps) {
  const filteredTodoList = useMemo(
    () =>
      todoList.filter(
        todo => todo.type === activatedBadge || activatedBadge === "ALL_"
      ),
    [todoList, activatedBadge]
  );

  const handleClickCheckIcon = useCallback((todoIndex: number) => {
    setTodoList(list =>
      list.map((todo, i) =>
        i === todoIndex
          ? {
              ...todo,
              type: todo.type === "TODO_" ? "DONE_" : "TODO_",
            }
          : todo
      )
    );
  }, []);
  return (
    <TodoList>
      <TodoListTitle>{`총 ${filteredTodoList.length}개`}</TodoListTitle>
      {filteredTodoList.map(({ type, text }, todoIndex) => (
        <Todo key={`todo-${todoIndex}`}>
          <CheckIconInner
            isActivated={type === "DONE_"}
            onClick={() => handleClickCheckIcon(todoIndex)}
          >
            {type === "DONE_" && <CheckIcon />}
          </CheckIconInner>
          <TodoText>{text}</TodoText>
          <CloseIcon
            onClick={() =>
              setTodoList(list =>
                list.filter((_, closeIndex) => closeIndex !== todoIndex)
              )
            }
          />
        </Todo>
      ))}
    </TodoList>
  );
}
