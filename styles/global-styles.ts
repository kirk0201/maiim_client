import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
${reset}
body {
    background-color: ${theme.body_bg};
    font-family: "Roboto", sans-serif;
}
`;
