"use client";

import MovieList from "@/components/MoviesList";
import SearchHeader from "@/components/SearchHeader";
import Sidebar from "@/components/Sidebar";
import IMovie from "@/interfaces/IMovie";
import MovieListData from "@/data/MovieList.json";
import { useSearchParams } from "next/navigation";

export default function Home() {
    const searchParams = useSearchParams();

    const movies: IMovie[] = MovieListData;

    const sort = searchParams.get("sort");
    if (sort === "ASC") {
        movies.sort((a, b) => a.rating - b.rating);
    } else if (sort === "DESC") {
        movies.sort((a, b) => b.rating - a.rating);
    }

    return (
        <>
            <Sidebar />
            <SearchHeader />
            <MovieList movies={movies} />
        </>
    );
}
