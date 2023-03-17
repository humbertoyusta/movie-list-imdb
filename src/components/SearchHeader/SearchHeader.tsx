import SearchBar from "@/components/SearchBar";
import {
    FiltersWrapper,
    GrayLine,
    SearchHeaderWrapper,
} from "@/components/SearchHeader/SearchHeader.styled";
import SortByRating from "@/components/SortByRating";
import YearFilter from "@/components/YearFilter";

export default function SearchHeader() {
    return (
        <>
            <SearchHeaderWrapper>
                <FiltersWrapper>
                    <SortByRating />
                    <YearFilter />
                </FiltersWrapper>
                <SearchBar />
            </SearchHeaderWrapper>
            <GrayLine />
        </>
    );
}
