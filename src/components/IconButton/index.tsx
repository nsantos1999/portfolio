"use client";

import { ButtonHTMLAttributes } from "react";
import { StyledIconButton } from "./styles";

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children: React.ReactNode;
}

export function IconButton({ children, ...rest }: IconButtonProps) {
  return <StyledIconButton {...rest}>{children}</StyledIconButton>;
  // return <button>{children}</button>;
}
