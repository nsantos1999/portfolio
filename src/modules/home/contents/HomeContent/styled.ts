"use client";

import { motion } from "framer-motion";

import { styled } from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.palette.primary.contrast};
  text-align: left;
  letter-spacing: 1px;
`;
export const Description = styled.h4`
  color: ${(props) => props.theme.palette.primary.contrast};
  text-align: left;
`;

export const Container = styled.div`
  height: auto;
  justify-content: center;
  /* padding-right: 2rem;
  padding-left: 2rem; */
`;

export const FloatContainer = styled(motion.div)`
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
`;

export const WaveContainer = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: -310px;
  /* width: 500px; */
  z-index: 1;
  height: 100px;
`;
export const InverseWaveContainer = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 280px;
  /* width: 500px; */
  z-index: 1;
  height: 100px;
`;

export const PortfolioContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 3rem;
  padding-left: 3rem;
  z-index: 2;
`;

export const AnimationContent = styled(motion.div)``;
