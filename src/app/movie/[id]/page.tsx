import Movie from "@/components/Movie";
import useGetMovie from "@/hooks/useGetMovie";

export default function MoviePage({ params }: { params: { id: string } }) {
    const movie = useGetMovie({ id: parseInt(params.id) });
    return movie ? <Movie movie={movie} /> : <></>;
}
