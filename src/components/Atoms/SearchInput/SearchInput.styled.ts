import styled from "styled-components";
import { typographyStyles } from "../Typography/Typography.styeld";

export const InputContainer = styled.div<{
  isFocused: boolean;
  hasHistory: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 480px;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.lightGray};
  height: 50px;
  overflow: visible;
  border-radius: ${({ isFocused, hasHistory }) =>
    isFocused && hasHistory ? "24px 24px 0px 0px" : "100px"};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  width: 380px;
  color: ${({ theme }) => theme.colors.subtitle};
  ${typographyStyles.caption}
`;

export const SearchListContainer = styled.div<{ isFocused: boolean }>`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  z-index: 1;
  display: ${({ isFocused }) => (isFocused ? "block" : "none")};
`;

export const SearchListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 25px 12px 51px;
  cursor: pointer;

  span {
    word-wrap: break-word;
    word-break: break-word;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};

    &:last-child:hover {
      border-bottom-left-radius: 24px;
      border-bottom-right-radius: 24px;
    }
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
