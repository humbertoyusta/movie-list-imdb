"use client";

import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    width: 84vw;
    padding-left: 4vw;
    margin-left: 12vw;
`;

export const HeaderTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;

    color: #000;
`;

export const GrayLine = styled.div`
    height: 1px;
    margin: 2vh 1vw 2vh 17vw;
    background-color: #ccc;
`;

export const EmptyDiv = styled.div`
    width: 100px;
    height: 10px;
`;
