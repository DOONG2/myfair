import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoUserTextInput from "./TodoUserTextInput";
import { TodoType } from "./TodoUserListPage";
import {
  TODO_LIST_LENGTH_ERROR,
  TODO_TEXT_LENGTH_ERROR,
} from "../../../constants/text";

// 테스트에 사용할 Mock 데이터와 함수
const mockTodoList: TodoType[] = [
  { type: "DONE_", text: "보람차게 일어나기" },
  { type: "TODO_", text: "꿀잠 자기" },
];
const mockSetTodoInputValue = jest.fn();
const mockSetIsValid = jest.fn();
const mockSetErrorMessage = jest.fn();
const mockSetTodoList = jest.fn();

describe("TodoUserTextInput 컴포넌트 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // 각 테스트 전에 Mock 함수들을 초기화
  });

  // 입력 값 길이 제한 (value.length > 20) 테스트
  it("입력 값이 20자를 초과하면 에러 메시지를 설정해야 함", () => {
    render(
      <TodoUserTextInput
        isValid={true}
        errorMessage=""
        todoInputValue=""
        todoList={mockTodoList}
        setTodoInputValue={mockSetTodoInputValue}
        setIsValid={mockSetIsValid}
        setErrorMessage={mockSetErrorMessage}
        setTodoList={mockSetTodoList}
      />
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, {
      target: {
        value: "This text is more than 20 characters long asdadasdasd",
      },
    }); // 20자 초과하는 텍스트 입력 시뮬레이션

    expect(mockSetIsValid).toHaveBeenCalledWith(false); // setIsValid가 false로 호출되었는지 확인
    expect(mockSetErrorMessage).toHaveBeenCalledWith(TODO_TEXT_LENGTH_ERROR); // setErrorMessage가 올바른 에러 메시지로 호출되었는지 확인
  });

  // TODO 목록 길이 제한 (typeTODO_Count >= 10) 테스트
  it("새로운 TODO를 추가할 때 목록 길이가 10에 도달하면 에러 메시지를 설정해야 함", async () => {
    const todoListWithNineTodos: TodoType[] = Array(10).fill({
      type: "TODO_",
      text: "테스트",
    }); // TODO_ 타입의 항목 10개로 이루어진 목록 생성
    const user = userEvent.setup();

    render(
      <TodoUserTextInput
        isValid={true}
        errorMessage=""
        todoInputValue="New Todo"
        todoList={todoListWithNineTodos} // 10개의 TODO가 있는 목록 전달
        setTodoInputValue={mockSetTodoInputValue}
        setIsValid={mockSetIsValid}
        setErrorMessage={mockSetErrorMessage}
        setTodoList={mockSetTodoList}
      />
    );

    const inputElement = screen.getByRole("textbox");
    await user.type(inputElement, "{enter}");

    expect(mockSetIsValid).toHaveBeenCalledWith(false); // setIsValid가 false로 호출되었는지 확인
    expect(mockSetErrorMessage).toHaveBeenCalledWith(TODO_LIST_LENGTH_ERROR); // setErrorMessage가 올바른 에러 메시지로 호출되었는지 확인
  });
});
