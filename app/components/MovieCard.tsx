"use client"
import { Movie } from "../types";
import { deleteMovie } from "../actions";

export default function MovieCard({ movie }: { movie: Movie }) {
    // handles deleting the movie on this card
    function handleDelete() {
        deleteMovie(movie.id);
    };
    // handles editing the movie on this card

    return <div className="border p-2 bg-slate-50">
        <h1 className="text-xl">{movie.title}</h1>
        <p>{movie.release_year}</p>
        <h2 className="text-lg">Actors</h2>
        <ul className="pl-5 list-disc">
            {movie.actors.sort().map((actor: string, index: number) => (
                <li key={index}>{actor}</li>
            ))}
        </ul>
        <button
            onClick={handleDelete}
            className="border"
        >
            Delete
        </button>
        <button
            // onClick={}
            className="border"
        >
            Edit
        </button>
    </div>
}