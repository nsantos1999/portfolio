import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
export const AboutMeTitle = styled.h1`
  color: ${({ theme }) => theme.palette.primary.contrast};
  letter-spacing: 1px;
`;
export const AboutMeDescription = styled.h4`
  color: ${({ theme }) => theme.palette.primary.contrast};
  letter-spacing: 1px;
`;
