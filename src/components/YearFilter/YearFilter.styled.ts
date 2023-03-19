"use client";

import styled from "styled-components";

export const YearFilterWrapper = styled.div<{
    status: "active" | "open" | "closed";
}>`
    display: flex;
    align-items: center;
    border-radius: 20px;
    border: 1px solid
        ${({ status }) => (status === "closed" ? "transparent" : "#ccc")};
    padding: 8px;
    cursor: pointer;
    &:hover {
        border: 1px solid #ccc;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const DropdownIcon = styled.div`
    margin-left: auto;
    margin-top: 6px;
`;
