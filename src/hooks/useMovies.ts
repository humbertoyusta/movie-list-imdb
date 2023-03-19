import IMovie from "@/interfaces/IMovie";
import MovieListData from "@/data/MovieList.json";

export interface IUseMoviesProps {
    filters?: {
        years?: {
            from: number;
            to: number;
        };
    };
    sortByRating?: "ASC" | "DESC";
}

export default function useMovies({ filters, sortByRating }: IUseMoviesProps) {
    let movies: IMovie[] = (MovieListData as Omit<IMovie[], "id">).map(
        (movie, index) => ({
            ...movie,
            id: index + 1,
        })
    );

    movies = movies.filter((movie) => {
        if (filters?.years) {
            return (
                movie.year >= filters.years.from &&
                movie.year <= filters.years.to
            );
        } else {
            return true;
        }
    });

    movies = movies.sort((a, b) => {
        if (sortByRating === "ASC") {
            return a.rating - b.rating;
        } else {
            if (sortByRating === "DESC") {
                return b.rating - a.rating;
            } else {
                return a.id - b.id;
            }
        }
    });

    return movies;
}
