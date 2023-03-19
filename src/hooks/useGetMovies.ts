import MovieListData from "@/data/MovieList.json";
import IMovie from "@/interfaces/IMovie";

export default function useGetMovies({ ids }: { ids: number[] }): IMovie[] {
    return ids.map((id) => ({
        ...(MovieListData as Omit<IMovie[], "id">)[id - 1],
        id,
    }));
}
