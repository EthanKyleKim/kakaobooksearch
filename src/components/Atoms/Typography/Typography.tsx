import { StyledTypography } from "./Typography.styeld";
import { TypographyProps } from "./Typography.type";

const variantToTag = {
  title1: "h1",
  title2: "h2",
  title3: "h3",
  body1: "p",
  body2: "p",
  body2Bold: "p",
  caption: "span",
  captionSmall: "span",
};

export default function Typography({
  variant,
  children,
  as,
  color,
}: TypographyProps) {
  const Component = as || variantToTag[variant]; // `as` 우선 적용, 없으면 variant 기반

  return (
    <StyledTypography as={Component} variant={variant} color={color}>
      {children}
    </StyledTypography>
  );
}
