"use client";

import { styled } from "styled-components";

export const StyledIconButton = styled.button`
  cursor: pointer;
  border: 0;
  /* border: 2px solid ${({ theme }) => theme.palette.secondary.dark}; */
  background-color: transparent;
  height: 100%;
  border-radius: 30%;
  /* width: 200px; */
  padding: 10px;
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-size: 1.5em;
  transition: 300ms;

  /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); */
  box-shadow: ${({ theme }) => theme.shadow.low({})};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.high({})};
    transform: scale(1.05);
  }
  &:active {
    transition: 10ms;
    transform: scale(0.95);
  }
`;
