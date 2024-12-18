import styled from "@emotion/styled";
import { theme } from "../../../app/theme";
import CloseSvg from "../../../icons/CloseSvg";
import MemoCheckSvg from "../../../icons/CheckSvg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-top: 128px;

  color: ${theme.textTitleColor};
  font-weight: 700;
  font-size: 56px;
  line-height: 72px;
`;
export const TextInputInner = styled.div`
  position: relative;
  padding: 32px;
  margin-top: 64px;
  width: 737px;
  height: 92px;

  background: ${theme.bgPrimaryColor};
  border-radius: 24px;
`;
export const Input = styled.input`
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

  ::placeholder {
    font-weight: 100;
  }
`;

export const ToDoDashboard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  padding: 32px;
  gap: 32px;

  border-radius: 24px;

  box-shadow: 0px 16px 32px 0px var(--blackAlpha/100);
  box-shadow: 0px 0px 6px 0px var(--blackAlpha/50);
`;

export const BadgeList = styled.div`
  display: flex;
  justify-content: center;
`;

export const Badge = styled.div<{ isActivated: boolean }>`
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

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 737px;

  font-size: 20px;
  font-weight: 400;
`;
export const TodoListTitle = styled.div`
  padding: 16px;
`;
export const Todo = styled.div`
  padding: 32px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TodoText = styled.div`
  flex-grow: 1;
  font-size: 20px;
  font-weight: 400;
`;

export const CheckIconInner = styled.div`
  width: 32px;
  height: 32px;

  border: 1px solid ${theme.borderPrimaryColor};
  border-radius: 100%;

  :hover {
    cursor: pointer;
  }
`;
export const CloseIcon = styled(CloseSvg)`
  :hover {
    cursor: pointer;
  }
`;

export const CheckIcon = styled(MemoCheckSvg)``;

export const TodoInputErrorMessage = styled.div`
  position: absolute;
  bottom: 5px;
  color: red;
`;

export const TextForm = styled.form`
  border: none;
`;
