import theme from "../Theme";
import { typographyStyles } from "./Typography.styeld";

export interface TypographyProps {
  variant: keyof typeof typographyStyles; // Variant 종류
  children: React.ReactNode;
  as?: React.ElementType; // 태그를 수동으로 지정할 경우
  color?: keyof typeof theme.colors; // 테마에서 사용할 색상 키
  lineHeight?: string;
  textDecoration?: React.CSSProperties["textDecoration"];
}
