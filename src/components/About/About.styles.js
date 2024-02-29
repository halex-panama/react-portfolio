import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  background-color: rgba(12, 12, 12, 0.6);
  border-radius: 1rem;
  z-index: 1;
  margin: 0 10%;
  padding: 3rem;

  h2 {
    color: var(--color-text);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.75px;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--color-text);
  text-align: justify;

  p {
    font-size: 1.5rem;
  }
`;
