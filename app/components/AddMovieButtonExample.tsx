'use client'
import { addMovie } from "../actions";
import { randomTitle, randomCast } from "../moviegen";

export function AddMovieButtonExample() {
    function addMovieExample() {
        // Look at actions.ts to see what this is doing :3
        addMovie(randomTitle(), "2026", randomCast());
    }
    return <button onClick={addMovieExample}>Add movie</button>
}