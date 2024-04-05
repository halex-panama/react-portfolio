import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  color: var(--color-text);
  margin: 5rem 10%;
  padding: 3rem;
  background-color: rgba(12, 12, 12, 0.6);
  border-radius: 15px;

  @media screen and (max-width: 640px) {
    margin: 2.5rem 1rem;
    padding: 1.5rem;
  }
`;

export const Heading = styled(motion.h2)`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.75px;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const Content = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Skill = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid var(--color-secondary);
  border-radius: 1rem;
  padding: 1rem;
  width: 12rem;
  height: 6.25rem;

  img {
    height: 1rem;
  }

  h3 {
    font-size: 1.5rem;
  }
`;
