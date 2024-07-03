import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  reverse?: boolean;
};

export const Container = styled.div<Props>`
  position: relative;
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

export const Skeleton = styled.div<Props>`
  animation: skeleton-loading 1s linear infinite alternate;
  position: absolute;
  width: 50%;
  height: 17.5rem;
  border-radius: 0.5rem;
  top: 0;
  left: ${({ reverse }) => (reverse ? "" : 0)};
  right: ${({ reverse }) => (reverse ? 0 : "")};

  @media screen and (max-width: 830px) {
    width: 100%;
    height: 12.5rem;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

export const ProjectImg = styled(motion.img)`
  border-radius: 0.5rem;
  width: 50%;
  height: 50%;
  min-height: 12.5rem;

  @media screen and (max-width: 830px) {
    order: 0;
    width: 100%;
    object-fit: cover;
  }
`;

export const TextContainer = styled(motion.div)`
  text-align: justify;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 50%;

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
