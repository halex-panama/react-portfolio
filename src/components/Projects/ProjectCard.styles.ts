import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  reverse?: boolean;
};

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border-radius: 1rem;
  padding: 1rem 0;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media screen and (max-width: 830px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled(motion.div)`
  border-radius: 1rem;
  min-height: 15.7rem;
  min-width: 25rem;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    min-height: 15.7rem;
    min-width: 25rem;
  }

  @media screen and (max-width: 830px) {
    min-height: 12.5rem;
    min-width: 20rem;

    img {
      min-height: 12.5rem;
      min-width: 20rem;
    }
  }
`;

export const TextContainer = styled(motion.div)`
  text-align: justify;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
  }

  @media screen and (max-width: 830px) {
    width: auto;
  }
`;

export const Skills = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
`;

export const Skill = styled.li`
  font-size: 1rem;
  font-weight: 400;
  border-radius: 0.5rem;
  background: var(--color-dark);
  padding: 5px 22px;
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

export const Link = styled.a`
  text-decoration: none;
  text-align: center;
  color: var(--color-text);
  font-size: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-primary);
  padding: 0.5rem 1rem;
  transition: 0.3s;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-text);
  }
`;
