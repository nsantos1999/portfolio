"use client";

import { Header } from "@/components/Header";
import {
  AnimationContent,
  Container,
  Description,
  FloatContainer,
  InverseWaveContainer,
  PortfolioContent,
  Title,
  WaveContainer,
} from "./styled";
import Image from "next/image";
import { Card } from "@/components/Card";
import { PresentationSection } from "./sections/PresentationSection";
import Lottie from "react-lottie";
import animationData from "@/animations/developer.json";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "@/i18n";
import Link from "next/link";
import { PortfolioSection } from "./sections/PortfolioSection";
import { InverseWave, Wave } from "@/components/Wave";
import { ThemeContext, useTheme } from "styled-components";
import { useContext } from "react";
import { theme } from "@/contants/theme.contants";
import { AboutMeSection } from "./sections/AboutMeSection";

export async function HomeContent() {
  const { t } = await useTranslation("home");
  // const theme = useContext(ThemeContext);
  return (
    <>
      <Header />
      <Container>
        <PresentationSection>
          <FloatContainer
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
          >
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={350}
              width={350}
            />
          </FloatContainer>
          <AnimationContent
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <Title>Natã Souza Santos | {t("techlead")}</Title>
          </AnimationContent>
        </PresentationSection>
        {/* <Wave color={theme?.palette.primary.main} /> */}

        <AnimationContent
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <Card>
            <WaveContainer>
              <Wave />
            </WaveContainer>
            <AboutMeSection />
            <InverseWaveContainer>
              <InverseWave />
            </InverseWaveContainer>
          </Card>
        </AnimationContent>
        {/* <AnimationContent
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <Card>
            <WaveContainer>
              <Wave />
            </WaveContainer>
            <PortfolioContent>
              <Title>Portfolio</Title>
              <Description>
                Aqui temos todos os trabalhos feitos desde o inicio da minha
                carreira
              </Description>
              <PortfolioSection />
            </PortfolioContent>
          </Card>
        </AnimationContent> */}

        {/* </AnimatePresence> */}
      </Container>
    </>
  );
}
