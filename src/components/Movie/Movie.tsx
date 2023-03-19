"use client";

import IMovie from "@/interfaces/IMovie";
import Image from "next/image";
import {
    ImageWrapper,
    MovieDescription,
    MovieInfo,
    MovieInfoWrapper,
    MovieWrapper,
} from "@/components/Movie/Movie.styled";

export default function Movie({ movie }: { movie: IMovie }) {
    return (
        <MovieWrapper>
            <ImageWrapper>
                <Image
                    src={movie.image_url}
                    alt={movie.name}
                    fill
                    sizes={"100%"}
                />
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
