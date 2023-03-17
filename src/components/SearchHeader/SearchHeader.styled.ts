"use client";

import styled from "styled-components";

export const SearchHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    width: 84vw;
    padding-left: 4vw;
    margin-left: 12vw;
`;

export const FiltersWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 20vw;
`;

export const GrayLine = styled.div`
    height: 1px;
    margin: 2vh 1vw 2vh 17vw;
    background-color: #ccc;
`;
