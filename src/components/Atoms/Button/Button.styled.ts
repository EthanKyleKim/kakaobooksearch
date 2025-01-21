import styled from "styled-components";
import { ButtonProps } from "./Button.type";

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* 텍스트와 아이콘 간격 */
  height: ${({ buttonType }) =>
    buttonType === "subtitle" ? "35.27px" : "48px"};
  width: ${({ size, buttonType }) => {
    if (buttonType === "subtitle") return "72px";
    if (size === "large") return "240px";
    if (size === "full") return "100%";
    return "115px";
  }};

  border-radius: 8px;
  border: ${({ buttonType, theme }) =>
    buttonType === "subtitle" ? `1px solid ${theme.colors.subtitle}` : "none"};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${({ theme, buttonType, variant }) => {
    let backgroundColor = "";
    let color = "";

    if (buttonType === "subtitle") {
      backgroundColor = "transparent";
      color = theme.colors.subtitle;
    } else if (variant === "primary") {
      backgroundColor = theme.colors.primary;
      color = theme.colors.white;
    } else {
      backgroundColor = theme.colors.lightGray;
      color = theme.colors.textSecondary;
    }

    return `
      background-color: ${backgroundColor};
      color: ${color};
    `;
  }}

  &:hover {
    ${({ theme, buttonType, variant }) => {
      let hoverBackgroundColor = "";
      let hoverColor = "";

      if (buttonType === "subtitle") {
        hoverBackgroundColor = theme.colors.lightGray;
        hoverColor = theme.colors.textPrimary;
      } else if (variant === "primary") {
        hoverBackgroundColor = theme.colors.hoverPrimary;
      } else {
        hoverBackgroundColor = theme.colors.gray;
        hoverColor = theme.colors.textPrimary;
      }

      return `
        background-color: ${hoverBackgroundColor};
        color: ${hoverColor};
      `;
    }}
  }
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
`;
