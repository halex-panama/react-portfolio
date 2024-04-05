import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  color: var(--color-text);
  margin: 0 10%;
`;

export const Heading = styled(motion.h2)`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.75px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding: 1rem 3rem;

  @media screen and (max-width: 830px) {
    padding: 1rem 0;
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;
