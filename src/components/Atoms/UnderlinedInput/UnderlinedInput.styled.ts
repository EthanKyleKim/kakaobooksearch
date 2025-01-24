import styled from "styled-components";
import { typographyStyles } from "../Typography/Typography.styeld";
import theme from "../Theme";

export const StyledUnderlinedInput = styled.input`
  width: 208px;
  height: 36px;
  padding: 0 8px;
  border: none;
  border-bottom: 1px solid ${theme.colors.primary};
  color: ${theme.colors.textPrimary};
  ${typographyStyles.body2Bold}
  outline: none;
`;
