import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Colours */
    --color-text: #fff;
    --color-primary: #576cbc;
    --color-secondary: #19376d;
    --color-dark: #0b2447;
    --color-bg: #04152d;

    /* Fonts */
    --font-roboto: "Roboto";
  }

  * {
    position:relative;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Outfit", Arial, Helvetica, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  .App {
  background-color: var(--color-bg);
  width: 100%;
  height: 100%;
  overflow: hidden;
}
`;
