"use client";

import MovieList from "@/components/MoviesList";
import SearchHeader from "@/components/SearchHeader";
import { useSearchParams } from "next/navigation";
import useMovies, { IUseMoviesProps } from "@/hooks/useMovies";

export default function Home() {
    const searchParams = useSearchParams();
    const yearFilter = searchParams.get("years");
    const sort = searchParams.get("sort");
    const search = searchParams.get("search");

    const options: IUseMoviesProps = {};
    if (yearFilter) {
        options.filters = {
            years: {
                from: parseInt(yearFilter.split("-")[0]),
                to: parseInt(yearFilter.split("-")[1]),
            },
        };
    }
    if (sort) {
        if (sort == "ASC") options.sortByRating = "ASC";
        if (sort == "DESC") options.sortByRating = "DESC";
    }
    if (search) {
        options.filters = {
            ...options?.filters,
            search,
        };
    }
    const movies = useMovies(options);

    return (
        <>
            <SearchHeader />
            <MovieList movies={movies} />
        </>
    );
}
