import { createGlobalStyle } from "styled-components";
import { theme } from "@/theme";

export const GlobalStyle = createGlobalStyle`
    body {
        color: ${theme.colors.black};
        background-color: ${theme.colors.white};
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: ${theme.colors.black};
    }
`;
