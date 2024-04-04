import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  margin: 5rem 10%;
  gap: 2rem;

  @media screen and (max-width: 830px) {
    flex-direction: column-reverse;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--color-text);
  z-index: 1;
  text-align: justify;

  h1 {
    font-size: 4.5rem;
    font-weight: 900;
    font-family: var(--font-roboto);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 70%,
      rgba(255, 255, 255, 0) 120%
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    @media screen and (max-width: 640px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 2rem;
    font-family: var(--font-roboto);
    margin-bottom: 3.25rem;
  }

  @media screen and (max-width: 830px) {
    align-items: center;
  }
`;

export const ContactBtn = styled.a`
  text-decoration: none;
  background-color: var(--color-primary);
  color: var(--color-text);
  border-radius: 6.25rem;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
`;

export const HeroImg = styled.img`
  z-index: 1;
  border-radius: 50%;
  width: 15rem;

  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }

  @media screen and (max-width: 640px) {
    width: 12.5rem;
  }
`;
