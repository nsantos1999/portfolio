"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  padding: 1em;
  background-image: linear-gradient(
    ${({ theme }) => theme.palette.primary.light},
    ${({ theme }) => theme.palette.primary.main}
  );
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
