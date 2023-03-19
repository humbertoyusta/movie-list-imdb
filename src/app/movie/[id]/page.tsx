import Movie from "@/components/Movie";
import Header from "@/components/Header";
import useGetMovies from "@/hooks/useGetMovies";

export default function MoviePage({ params }: { params: { id: string } }) {
    const movie = useGetMovies({ ids: [parseInt(params.id)] })[0];
    return movie ? (
        <>
            <Header title={movie.name} />
            <Movie movie={movie} />
        </>
    ) : (
        <></>
    );
}
