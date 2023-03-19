import MovieListData from "@/data/MovieList.json";
import IMovie from "@/interfaces/IMovie";

export default function useGetMovie({ id }: { id: number }): IMovie {
    return {
        ...(MovieListData as Omit<IMovie[], "id">)[id - 1],
        id,
    };
}
