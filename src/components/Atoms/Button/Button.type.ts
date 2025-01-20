import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "large" | "full";
  buttonType?: "defaultButton" | "subtitle"; // 사용자 정의 속성
  icon?: React.ReactNode;
}
