import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  margin: 0 10%;
  gap: 2rem;
  height: 90dvh;

  @media screen and (max-width: 830px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const Content = styled(motion.div)`
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

  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-primary);
  background-color: transparent;
  color: var(--color-text);
  transition: 0.3s;

  &:hover {
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }
`;

export const HeroImg = styled(motion.img)`
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
