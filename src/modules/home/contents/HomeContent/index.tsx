"use client";

import { Header } from "@/components/Header";
import { AnimationContent, Container, FloatContainer, Title } from "./styled";
import Image from "next/image";
import { Card } from "@/components/Card";
import { PresentationSection } from "./sections/PresentationSection";
import Lottie from "react-lottie";
import animationData from "@/animations/developer.json";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "@/i18n";
import Link from "next/link";
import { PortfolioSection } from "./sections/PortfolioSection";

export async function HomeContent() {
  const { t } = await useTranslation("home");

  return (
    <>
      <Header />
      <Container>
        <PresentationSection>
          <FloatContainer
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", duration: 0.5 }}
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
              height={400}
              width={400}
            />
          </FloatContainer>
          <AnimatePresence>
            <AnimationContent
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <Title>Natã Souza Santos | {t("techlead")}</Title>
            </AnimationContent>
          </AnimatePresence>
        </PresentationSection>
        <Card>
          <Title>Portfolio</Title>
          <PortfolioSection />
          {/* <Link href={`/pt-br`}>Pt-br</Link> */}
        </Card>
      </Container>
    </>
  );
}
