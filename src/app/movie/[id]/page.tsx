import Movie from "@/components/Movie";
import useGetMovie from "@/hooks/useGetMovie";
import Header from "@/components/Header";

export default function MoviePage({ params }: { params: { id: string } }) {
    const movie = useGetMovie({ id: parseInt(params.id) });
    return movie ? (
        <>
            <Header title={movie.name} />
            <Movie movie={movie} />
        </>
    ) : (
        <></>
    );
}
