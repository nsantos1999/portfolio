"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  /* border-radius: 3%; */
  border-radius: 10px;
  /* box-shadow: ${({ theme }) => theme.shadow.medium({})}; */
  /* border: 1px solid ${({ theme }) => theme.palette.secondary.dark}; */
  padding: 1em;
  /* background-color: ${({ theme }) => theme.palette.primary.light}; */
  background-image: linear-gradient(
    ${({ theme }) => theme.palette.primary.light},
    ${({ theme }) => theme.palette.primary.main}
  );
  /* border: 1px solid transparent; */
`;
