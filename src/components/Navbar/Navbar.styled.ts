"use client";

import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/theme";

export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 10px;
`;

export const NavbarItem = styled(Link)`
    text-decoration: none;
    margin: 0 auto;
    font-size: 18px;
    color: ${theme.colors.dark_gray};
    padding: 20px;
`;
