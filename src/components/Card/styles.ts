"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 5em;
  /* background-image: linear-gradient(
    ${({ theme }) => theme.palette.secondary.dark},
    ${({ theme }) => theme.palette.secondary.main}
  ); */
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
