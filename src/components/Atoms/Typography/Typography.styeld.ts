import styled, { css } from "styled-components";
import { TypographyProps } from "./Typography.type";

// Variant별 스타일 정의
export const typographyStyles = {
  title1: css`
    font-size: 24px;
    font-weight: 700;
    margin: 0px;
  `,
  title2: css`
    font-size: 22px;
    font-weight: 700;
    margin: 0px;
  `,
  title3: css`
    font-size: 18px;
    font-weight: 700;
    margin: 0px;
  `,
  body1: css`
    font-size: 20px;
    font-weight: 500;
    margin: 0px;
  `,
  body2: css`
    font-size: 14px;
    font-weight: 500;
    margin: 0px;
  `,
  body2Bold: css`
    font-size: 14px;
    font-weight: 700;
    margin: 0px;
  `,
  caption: css`
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
  `,
  captionSmall: css`
    font-size: 10px;
    font-weight: 500;
    margin: 0px;
  `,
};

// StyledTypography 컴포넌트
export const StyledTypography = styled.span<TypographyProps>`
  display: inline;
  ${({ variant }) => typographyStyles[variant]};
  color: ${({ theme, color }) => (color ? theme.colors[color] : "inherit")};
  line-height: ${({ lineHeight }) => lineHeight};
  text-decoration: ${({ textDecoration }) => textDecoration || "none"};
`;
