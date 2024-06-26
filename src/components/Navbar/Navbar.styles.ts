import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  margin: 0 10%;
  padding: 1.25rem 0;

  @media screen and (max-width: 830px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavTitle = styled(motion.a)`
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-text);
  cursor: pointer;
`;

export const Menu = styled(motion.div)`
  display: flex;

  @media screen and (max-width: 830px) {
    position: absolute;
    right: 0;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.7rem;
    z-index: 3;

    .menuOpen {
      display: flex;
      z-index: 1;
    }
  }
`;

export const MenuBtn = styled(motion.img)`
  display: none;

  @media screen and (max-width: 830px) {
    display: block;
    cursor: pointer;
  }
`;

export const MenuItems = styled(motion.ul)`
  display: flex;
  gap: 3rem;
  list-style: none;

  @media screen and (max-width: 830px) {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 1rem;
    background: rgb(25, 55, 109);
    background: linear-gradient(
      0deg,
      rgba(25, 55, 109, 0.2) 0%,
      rgba(25, 55, 109, 1) 100%
    );
    padding: 1.5rem 2rem;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const MenuLink = styled(motion.a)`
  font-size: 1.5rem;
  color: var(--color-text);
  text-decoration: underline;
  text-underline-offset: 0.2rem;
  text-decoration-color: rgba(255, 255, 255, 0);
  transition: 300ms;

  &:hover {
    text-decoration-color: rgba(255, 255, 255, 1);
    text-underline-offset: 0.5rem;
  }
`;
