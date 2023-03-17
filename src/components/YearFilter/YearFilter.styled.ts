"use client";

import styled from "styled-components";

export const YearFilterWrapper = styled.div<{ active: boolean }>`
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

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const DropdownWrapper = styled.div`
    position: absolute;
    top: 56px;
    left: 28vw;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 10;
    border-radius: 5px;
    padding: 8px;
`;

export const DropdownInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 200px;
`;

export const FilterInput = styled.input`
    display: block;
    width: 80px;
    padding: 8px;
    margin-bottom: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    &:focus {
        outline: none;
        border-color: #999;
    }
`;

export const DropdownIcon = styled.div`
    margin-left: auto;
    margin-top: 6px;
`;

export const FilterButton = styled.button`
    display: block;
    width: 60px;
    padding: 6px;
    margin-bottom: 4px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #f7f7f7;
    }
`;
