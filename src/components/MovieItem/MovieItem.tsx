import IMovie from "@/interfaces/IMovie";
import {
    MovieCard,
    MovieGenres,
    MovieInfo,
    MovieInfoCard,
    MovieRating,
    MovieYear,
} from "./MovieItem.styled";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface IMovieItemProps {
    movie: IMovie;
    index: number;
}

export default function MovieItem({ movie, index }: IMovieItemProps) {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <MovieCard
            key={index}
            ref={ref}
            initial={{ opacity: 0, rotate: -5, x: -15, y: -15 }}
            animate={
                inView
                    ? { opacity: 1, rotate: 0, x: 0, y: 0 }
                    : { opacity: 0, rotate: -5, x: -15, y: -15 }
            }
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <Image
                src={movie.thumb_url}
                alt={movie.name}
                fill
                sizes="100% 100%"
            />
            <MovieInfoCard>
                <MovieInfo>
                    <div>{movie.name}</div>
                    <MovieRating>Rating: {movie.rating}</MovieRating>
                    <MovieYear>Year: {movie.year}</MovieYear>
                    <MovieGenres>Genres: {movie.genre.join(", ")}</MovieGenres>
                </MovieInfo>
            </MovieInfoCard>
        </MovieCard>
    );
}
