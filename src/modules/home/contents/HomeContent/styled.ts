"use client";

import { styled } from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.palette.primary.contrast};
  text-align: center;
  /* background-color: ${(props) => props.theme.palette.secondary.main}; */
`;

export const Container = styled.div`
  height: auto;
  justify-content: center;
  /* padding-top: 10rem; */
  padding-right: 2rem;
  padding-left: 2rem;
`;
