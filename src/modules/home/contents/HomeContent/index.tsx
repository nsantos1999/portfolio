import { Header } from "@/components/Header";
import { Container, Title } from "./styled";
import Image from "next/image";
import { Card } from "@/components/Card";
import { PresentationSection } from "./sections/PresentationSection";

export function HomeContent() {
  return (
    <>
      <Header />
      <Container>
        <PresentationSection>
          <Title>Natã Souza Santos | Tech Lead</Title>
        </PresentationSection>
        <Card>
          <Title>Portfolio</Title>
        </Card>
      </Container>
    </>
  );
}
