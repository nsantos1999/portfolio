"use client";

import { styled } from "styled-components";

export const Title = styled("h1")`
  color: ${(props) => props.theme.palette.primary.contrast};
  background-color: ${(props) => props.theme.palette.secondary.main};
`;

export const Container = styled("div")`
  background-color: ${(props) => props.theme.palette.primary.main};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 6rem;
  /* align-items: center; */
`;
