import { Movie } from "../types";

export default function MovieCard({ movie }: { movie: Movie }) {
    // TODO: Add a delete button which removes the movie from the database
    return <div className="border p-2 bg-slate-50">
        <h1 className="text-xl">{movie.title}</h1>
        <p>{movie.release_year}</p>
        <h2 className="text-lg">Actors</h2>
        <ul className="pl-5 list-disc">
            {movie.actors.sort().map((actor: string, index: number) => (
                <li key={index}>{actor}</li>
            ))}
        </ul>
    </div>
}