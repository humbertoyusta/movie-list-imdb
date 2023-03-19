"use client";

import IMovie from "@/interfaces/IMovie";
import {
    ImageWrapper,
    MovieDescription,
    MovieInfo,
    MovieInfoWrapper,
    MovieWrapper,
} from "@/components/Movie/Movie.styled";
import NextImage from "@/components/NextImage";

export default function Movie({ movie }: { movie: IMovie }) {
    return (
        <MovieWrapper>
            <ImageWrapper>
                <NextImage src={movie.image_url} alt={movie.name} />
            </ImageWrapper>
            <MovieInfoWrapper>
                <MovieDescription>{movie.desc}</MovieDescription>
                <MovieInfo>Rating: {movie.rating}</MovieInfo>
                <MovieInfo>Year: {movie.year}</MovieInfo>
                <MovieInfo>Genres: {movie.genre.join(", ")}</MovieInfo>
                <MovieInfo>Actors: {movie.actors.join(", ")}</MovieInfo>
                <MovieInfo>Directors: {movie.directors.join(", ")}</MovieInfo>
            </MovieInfoWrapper>
        </MovieWrapper>
    );
}
