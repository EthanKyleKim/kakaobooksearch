import { typographyStyles } from "./../Typography/Typography.styeld";
import styled from "styled-components";

export const InputContainer = styled.div<{ isFocused: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 480px;
  padding: 10px 20px;
  border-radius: ${({ isFocused }) => (isFocused ? "24px" : "100px")};
  transition: border-radius 0.3s ease, height 0.3s ease;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.lightGray};
  transition: height 0.3s ease;
  height: ${({ isFocused }) => (isFocused ? "100%" : "50px")};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
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

export const SearchListItem = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  margin-left: 28px;

  span {
    word-wrap: break-word;
    word-break: break-word;
  }

  span:first-child {
    padding-top: 16px;
  }

  span:last-child {
    padding-bottom: 4px;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
`;
