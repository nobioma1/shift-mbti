import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto';
import 'typeface-nunito';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  *, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
