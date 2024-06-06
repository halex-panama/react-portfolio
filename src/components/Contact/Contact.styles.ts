import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.footer`
  color: var(--color-text);
  background-color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  padding: 58px 10%;
  gap: 1.5rem;
  margin: 8rem 0;

  h2 {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 4px;
  }

  p {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 830px) {
    /* padding: 58px 0; */
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10rem;

  @media screen and (max-width: 830px) {
    gap: 1rem;
  }
`;

export const Links = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  gap: 26px;

  @media screen and (max-width: 830px) {
    align-items: center;
  }
`;

export const Link = styled.li`
  display: flex;
  align-items: center;
  gap: 25px;

  a {
    color: var(--color-text);
    text-decoration: none;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 1.5px;
  }

  @media screen and (max-width: 830px) {
    gap: 0.5rem;
    a {
      font-size: 1.4rem;
    }

    img {
      height: 1.2rem;
    }
  }
`;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  width: 50%;

  input,
  textarea {
    outline-color: var(--color-primary);
  }

  textarea {
    min-height: 10rem;
  }

  input,
  textarea,
  button {
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    /* width: 50%; */
    border: none;
  }

  button {
    width: fit-content;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    border: 1px solid var(--color-dark);
    background-color: transparent;
    color: var(--color-text);
    transition: 0.3s;
    background-color: var(--color-primary);
    cursor: pointer;

    &:hover {
      background-color: var(--color-bg);
    }
  }

  p {
    font-size: 12px;
  }

  @media screen and (max-width: 830px) {
    width: 100%;

    input,
    textarea {
      width: 100%;
    }

    button {
      margin: 1rem auto;
    }
  }
`;
