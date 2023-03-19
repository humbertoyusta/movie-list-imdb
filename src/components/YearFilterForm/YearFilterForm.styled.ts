import styled from "styled-components";

export const DropdownForm = styled.form`
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

export const FilterInput = styled.input<{ hasErrors: boolean }>`
    display: block;
    width: 80px;
    padding: 8px;
    border: 1px solid ${({ hasErrors }) => (hasErrors ? "red" : "#ccc")};
    border-radius: 5px;
`;

export const FilterButton = styled.button`
    display: block;
    width: 60px;
    padding: 6px;
    margin-bottom: 4px;
    margin-top: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #f7f7f7;
    }
`;

export const FilterError = styled.span`
    color: red;
    font-size: 12px;
    font-weight: 300;
`;
