import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  body{
     font-family: "Open Sans", sans-serif;
  } 
  a{
    text-decoration: none;
  }
  ul{
    list-style-type: none;
  }
  
`;
