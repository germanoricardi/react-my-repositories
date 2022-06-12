import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin    : 0;
    padding   : 0;
    outline   : 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color      : #0D2636;
    font-size             : 14px;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color      : #222222;
    font-family: Arial, Helvetica, sans-serif;
    font-size  : 14px;
  }

  button {
    cursor: pointer;
  }
`;