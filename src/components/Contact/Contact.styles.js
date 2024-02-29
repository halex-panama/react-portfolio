import styled from "styled-components";

export const Container = styled.footer`
  color: var(--color-text);
  background-color: var(--color-secondary);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100vw;
  padding: 58px 10%;
  gap: 10px;
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
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Links = styled.ul`
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
      font-size: 1.5rem;
    }

    img {
      height: 1.25rem;
    }
  }
`;
