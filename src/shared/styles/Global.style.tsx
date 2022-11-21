import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background-color: #2990FD;
      color: #fff;
      font-family: 'Poppins', sans-serif;
    }

    a {
      text-decoration: none;
      color: #fff;
    }

    ul {
      list-style-type: none;
    }
`;

export default GlobalStyles;
