import MovieList from "@/components/MoviesList";
import SearchHeader from "@/components/SearchHeader";
import Sidebar from "@/components/Sidebar";
import MoviesListData from "@/data/MovieList.json";
import IMovie from "@/interfaces/IMovie";

export default function Home() {
    const movies: IMovie[] = MoviesListData;

    return (
        <>
            <Sidebar />
            <SearchHeader />
            <MovieList movies={movies} />
        </>
    );
}
