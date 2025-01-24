import React from "react";
import Typography from "../Typography/Typography.tsx";
import { IconContainer, StyledButton } from "./Button.styled.ts";
import { ButtonProps } from "./Button.type.ts";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "default",
      $buttonType = "defaultButton",
      icon,
      onClick,
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        $buttonType={$buttonType}
        icon={icon}
        onClick={onClick}
      >
        <Typography variant={$buttonType === "subtitle" ? "body2" : "caption"}>
          {children}
        </Typography>
        {icon && <IconContainer>{icon}</IconContainer>}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
export default Button;
