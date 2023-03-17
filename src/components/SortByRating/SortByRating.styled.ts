"use client";

import styled from "styled-components";

export const SortByRatingWrapper = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    border-radius: 20px;
    border: 1px solid ${({ active }) => (active ? "#ccc" : "transparent")};
    padding: 8px;
    cursor: pointer;
    &:hover {
        border: 1px solid #ccc;
    }
`;

export const DropdownWrapper = styled.div`
    position: absolute;
    top: 56px;
    left: 17vw;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 10;
    border-radius: 5px;
    padding: 8px;
`;

export const DropdownOption = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;

    &:hover {
        background-color: #f7f7f7;
    }

    &:not(:last-child) {
        border-bottom: 1px solid #ccc;
    }
`;

export const DropdownIcon = styled.div`
    margin-left: auto;
    margin-top: 6px;
`;
