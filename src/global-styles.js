import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, ssans-serif;
        -webkit-font-smoothing: antialised;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: #333;
        font-size: 16px;
    }
`;
