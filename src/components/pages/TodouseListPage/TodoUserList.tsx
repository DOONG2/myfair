import {
  CheckIcon,
  CheckIconInner,
  CloseIcon,
  Todo,
  TodoList,
  TodoListTitle,
  TodoText,
} from "./style";
import { TodoType } from "./TodoUserListPage";

interface TodoUserListProps {
  todoList: TodoType[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export default function TodoUserList({
  todoList,
  setTodoList,
}: TodoUserListProps) {
  return (
    <TodoList>
      <TodoListTitle>{`총 ${todoList.length}개`}</TodoListTitle>
      {todoList.map(({ type, text }, todoIndex) => (
        <Todo key={`todo-${todoIndex}`}>
          <CheckIconInner
            isActivated={type === "DONE_"}
            onClick={() => {
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
            }}
          >
            {type === "DONE_" && <CheckIcon />}
          </CheckIconInner>
          <TodoText>{text}</TodoText>
          <CloseIcon
            onClick={() => {
              setTodoList(list =>
                list.filter((_, closeIndex) => closeIndex !== todoIndex)
              );
            }}
          />
        </Todo>
      ))}
    </TodoList>
  );
}
