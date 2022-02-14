import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
body {
    background-color: #fafafa;
    font-family: "Noto sans KR", sans-serif;
}
`;
