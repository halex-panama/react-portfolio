import styled from "styled-components";

export const Container = styled.section`
  color: var(--color-text);
  margin: 0 10%;

  h2 {
    color: var(--color-text);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.75px;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
