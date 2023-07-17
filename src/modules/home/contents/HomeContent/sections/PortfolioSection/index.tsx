import { PortfolioItem } from "./components/PortfolioItem";
import { PortfolioContainer } from "./styles";

export function PortfolioSection() {
  return (
    <PortfolioContainer>
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </PortfolioContainer>
  );
}
