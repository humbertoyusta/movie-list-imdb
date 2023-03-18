"use client";

import IMovie from "@/interfaces/IMovie";
import { MovieListWrapper } from "@/components/MoviesList/MovieList.styled";
import MovieItem from "@/components/MovieItem";

interface MovieListProps {
    movies: IMovie[];
}

export default function MovieList({ movies }: MovieListProps) {
    return (
        <MovieListWrapper>
            {movies.map((movie, index) => (
                <MovieItem key={index} movie={movie} />
            ))}
        </MovieListWrapper>
    );
}
