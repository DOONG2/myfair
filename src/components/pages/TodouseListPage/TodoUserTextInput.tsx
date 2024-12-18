import { useCallback, useMemo } from "react";
import { TODO_PLACEHOLDER } from "../../../constants/text";
import {
  Input,
  TextForm,
  TextInputInner,
  TodoInputErrorMessage,
} from "./style";
import { TodoType } from "./TodoUserListPage";

interface TodoUserTextInputProps {
  isValid: boolean;
  errorMessage: string;
  todoInputValue: string;
  todoList: TodoType[];
  setTodoInputValue: (todoInputValue: string) => void;
  setIsValid: (isValid: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
  setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export default function TodoUserTextInput({
  isValid,
  errorMessage,
  todoInputValue,
  todoList,
  setTodoInputValue,
  setIsValid,
  setErrorMessage,
  setTodoList,
}: TodoUserTextInputProps) {
  const typeTODO_Count = useMemo(
    () => todoList.filter(todo => todo.type === "TODO_").length,
    [todoList]
  );
  const handleChangeTodoInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setTodoInputValue(value);

      if (value.length > 20) {
        setIsValid(false);
        setErrorMessage("'할 일'은 20글자를 넘길 수 없습니다.");
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

      if (typeTODO_Count >= 10) {
        setIsValid(false);
        setErrorMessage("처리가 안된 '할 일'은 10개를 넘을 수 없습니다.");

        setTimeout(() => {
          setIsValid(true);
          setErrorMessage("");
        }, 3000);
        return;
      }

      setTodoList((todoList: TodoType[]): TodoType[] => [
        ...todoList,
        { type: "TODO_", text: todoInputValue },
      ]);
      setTodoInputValue("");
    },
    [todoInputValue, isValid]
  );
  return (
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
  );
}
