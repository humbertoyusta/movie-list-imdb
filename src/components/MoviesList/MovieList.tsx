"use client";

import IMovie from "@/interfaces/IMovie";
import { MovieListWrapper } from "@/components/MoviesList/MovieList.styled";
import MovieItem from "@/components/MovieItem";
import { useEffect, useState } from "react";

interface MovieListProps {
    movies: IMovie[];
    onlyFavorites?: boolean;
}

export default function MovieList({ movies, onlyFavorites }: MovieListProps) {
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

    useEffect(() => {
        const fetchFavoriteMovies = async () => {
            const response = await fetch("/api/favorites", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            const data = await response.json();
            setFavoriteIds(data.favoriteMovies);
        };
        fetchFavoriteMovies();
    }, []);

    const handleToggleFavorite = async (movieId: number) => {
        const response = await fetch("/api/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: movieId }),
        });
        if (response.ok) {
            const data = await response.json();
            setFavoriteIds(data.favoriteMovies);
        }
    };

    return (
        <MovieListWrapper>
            {movies.map((movie, index) => (
                <MovieItem
                    key={`${movie.id}-${index}`}
                    movie={movie}
                    index={index}
                    isFavorite={favoriteIds.includes(movie.id)}
                    onToggleFavorite={() => handleToggleFavorite(movie.id)}
                    onlyFavorites={onlyFavorites}
                />
            ))}
        </MovieListWrapper>
    );
}
