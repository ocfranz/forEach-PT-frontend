import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body, html{
        margin :0px;
        padding: 0px;
        height: 100%;
        width: 100%;
    }

    body{
        background-color : #F5F6F9;
    }
    *{
        font-family: 'Poppins', sans-serif;
    } 
`;
export default GlobalStyles;
