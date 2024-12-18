import { useCallback } from "react";
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
  setTodoInputValue: (todoInputValue: string) => void;
  setIsValid: (isValid: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
  setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export default function TodoUserTextInput({
  isValid,
  errorMessage,
  todoInputValue,
  setTodoInputValue,
  setIsValid,
  setErrorMessage,
  setTodoList,
}: TodoUserTextInputProps) {
  const handleChangeTodoInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setTodoInputValue(value);

      if (value.length > 20) {
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
