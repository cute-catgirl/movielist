'use client'
import { deleteAllMovies } from "../actions";

export function DeleteAllMoviesButton() {
    return <button onClick={deleteAllMovies} className="border p-1 bg-slate-100 hover:bg-slate-200">Delete all movies</button>
}