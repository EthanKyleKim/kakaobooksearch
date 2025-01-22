import styled from "styled-components";
import { typographyStyles } from "../Typography/Typography.styeld";

export const StyledUnderlinedInput = styled.input`
  width: 208px;
  height: 36px;
  padding: 0 8px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  ${typographyStyles.body2Bold}
  outline: none;
`;
