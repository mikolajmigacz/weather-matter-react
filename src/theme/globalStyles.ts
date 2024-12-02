import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Medium.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-SemiBold.ttf') format('truetype');
    font-weight: 600;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: block;
    max-width: 100%;
  }

  input, button {
    font: inherit;
  }
`;
