import { ButtonProps } from "./Button.type.ts";
import { IconContainer, StyledButton } from "./Button.styled.ts";
import Typography from "../Typography/Typography.tsx";

export default function Button({
  children,
  variant = "primary",
  size = "default",
  buttonType = "defaultButton",
  icon,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      buttonType={buttonType}
      {...props}
      icon={icon}
    >
      <Typography variant={buttonType === "subtitle" ? "body2" : "caption"}>
        {children}
      </Typography>
      {icon && <IconContainer>{icon}</IconContainer>}
    </StyledButton>
  );
}
