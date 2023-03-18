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

export default function MovieItem({ movie }: { movie: IMovie }) {
    // const [ref, inView] = useInView({
    //     threshold: 0.1,
    //     triggerOnce: true,
    // });

    return (
        <MovieCard
            key={movie.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
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
