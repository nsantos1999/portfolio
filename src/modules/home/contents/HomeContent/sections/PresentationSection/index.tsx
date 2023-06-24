import { SectionContainer } from "./styles";

export interface PresentationSectionProps {
  children: React.ReactNode;
}

export function PresentationSection({ children }: PresentationSectionProps) {
  return <SectionContainer>{children}</SectionContainer>;
}
