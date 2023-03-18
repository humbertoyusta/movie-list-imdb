export default interface IMovie {
    name: string;
    desc: string;
    rating: number;
    year: number;
    genre: string[];
    actors: string[];
    directors: string[];
    image_url: string;
    thumb_url: string;
    imdb_url: string;
}
