import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 10px;
  background: linear-gradient(180deg, #576cbc 0%, #132a53 100%);
  box-shadow: 0 16px 14px 0 #04152d;
  padding: 1rem 1.5rem;
  max-width: 20rem;
  text-align: justify-all;

  img {
    border-radius: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
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
  border-radius: 1rem;
  background: var(--color-dark);
  padding: 2px 22px;
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: var(--color-text);
  font-size: 1.75rem;
  font-weight: 600;
  border-radius: 100px;
  background: var(--color-primary);
  padding: 1px 20px;
`;
