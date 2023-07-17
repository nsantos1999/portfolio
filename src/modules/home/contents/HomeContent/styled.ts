"use client";

import { motion } from "framer-motion";

import { styled } from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.palette.primary.contrast};
  text-align: center;
`;

export const Container = styled.div`
  height: auto;
  justify-content: center;
  padding-right: 2rem;
  padding-left: 2rem;
`;

export const FloatContainer = styled(motion.div)`
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
`;

export const AnimationContent = styled(motion.div)``;
