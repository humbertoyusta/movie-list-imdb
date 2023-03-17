import {
    SearchBarFormStyled,
    SearchBarInputStyled,
    SearchBarSubmitStyled,
} from "./SearchBar.styled";

export default function SearchBar() {
    return (
        <SearchBarFormStyled>
            <SearchBarInputStyled
                type="text"
                placeholder="Search for amazing movies..."
            />
            <SearchBarSubmitStyled type="submit" />
        </SearchBarFormStyled>
    );
}
