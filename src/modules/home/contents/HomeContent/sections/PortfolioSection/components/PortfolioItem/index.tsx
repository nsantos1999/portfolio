import { PortfolioCard, ProjectImage, ProjectTitle } from "./styles";

export function PortfolioItem() {
  return (
    <PortfolioCard>
      <ProjectImage
        src="/website.jpeg"
        width={500}
        height={300}
        alt="Picture of the author"
      />
      <ProjectTitle>teste</ProjectTitle>
      {/* <h1>teste</h1> */}
    </PortfolioCard>
  );
}
