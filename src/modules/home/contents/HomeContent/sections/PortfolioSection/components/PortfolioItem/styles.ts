import Image from "next/image";
import styled from "styled-components";

export const PortfolioCard = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  /* border: 3px solid ${({ theme }) => theme.palette.primary.light}; */
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow.medium({})};
  justify-content: center;
  align-items: center;
`;

export const ProjectImage = styled(Image)`
  object-fit: cover;
`;

export const ProjectTitle = styled.h3`
  color: ${(props) => props.theme.palette.primary.contrast};
`;
