"use client";

import styled from "styled-components";
import { theme } from "@/theme";

export const MovieWrapper = styled.div`
    width: 68vw;
    margin-left: 22vw;
    margin-right: 10vw;
    margin-top: 8vh;
    display: flex;
    flex-direction: row;
    position: relative;
`;

export const ImageWrapper = styled.div`
    width: 40vw;
    height: 30vw;
    position: relative;
`;

export const MovieInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
    margin-right: 2vw;
    position: relative;
    width: 24vw;
`;

export const MovieDescription = styled.p`
    color: ${theme.colors.dark_gray};
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 300;
`;

export const MovieInfo = styled.p`
    color: ${theme.colors.light_black};
    font-size: 1.2rem;
    font-weight: 300;
    font-style: italic;
    padding: 4px;
    margin: 4px;
`;
