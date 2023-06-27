"use client";

import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: absolute;
  top: 3rem;
  display: flex;
  align-items: center;
  width: 70%;
  left: 0;
  right: 0;
  margin: auto;
  min-height: 40px;
  padding: 1em;
  color: ${({ theme }) => theme.palette.primary.contrast};
  text-align: center;
  align-self: center;
  justify-content: space-between;
  border-radius: 10px;
  /* opacity: 0.7; */
  box-shadow: ${({ theme }) => theme.shadow.high({ y: 3 })};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  background-color: rgba(42, 43, 56, 0.5);
`;
