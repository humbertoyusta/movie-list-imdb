import { NextResponse } from "next/server";

interface IMovieData {
    favoriteMovies: number[];
}

let movieData: IMovieData = {
    favoriteMovies: [],
};

export async function GET(request: Request) {
    return NextResponse.json({ favoriteMovies: movieData.favoriteMovies });
}

export async function POST(request: Request) {
    const { id } = await request.json();
    const numericId = parseInt(id);
    if (!movieData.favoriteMovies.includes(numericId)) {
        movieData.favoriteMovies.push(numericId);
        return NextResponse.json({
            action: "added",
            favoriteMovies: movieData.favoriteMovies,
        });
    } else {
        movieData.favoriteMovies = movieData.favoriteMovies.filter(
            (movieId) => movieId !== numericId
        );
        return NextResponse.json({
            action: "removed",
            favoriteMovies: movieData.favoriteMovies,
        });
    }
}
