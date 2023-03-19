"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import useGetMovies from "@/hooks/useGetMovies";
import MovieList from "@/components/MoviesList";

export default function FavoritesPage() {
    const [movieIds, setMovieIds] = useState<number[]>([]);
    const movies = useGetMovies({ ids: movieIds });

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
            setMovieIds(data.favoriteMovies);
        };
        fetchFavoriteMovies();
    });
    return (
        <>
            <Header title="Favorites" />
            <MovieList movies={movies} onlyFavorites />
        </>
    );
}
