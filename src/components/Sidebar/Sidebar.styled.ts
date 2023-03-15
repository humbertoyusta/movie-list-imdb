"use client";

import styled from "styled-components";
import { theme } from "@/theme";

export const SidebarWrapper = styled.div`
    width: 12vw;
    background-color: ${theme.colors.light_gray};
    position: fixed;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    z-index: 1;
    top: 0;
    left: 0;
`;

export const WhiteBar = styled.div`
    width: 100%;
    height: 0.75px;
    border-radius: 0.5px;
    background-color: ${theme.colors.white};
    margin: 25px -10px 10px -10px;
    align-self: center;
`;
