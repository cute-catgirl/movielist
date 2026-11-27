'use server'

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addMovie(title: string, releaseYear: string, actors: string[]) {
    // New supabase client
    const supabase = await createClient();
    // Insert the movie to movies
    const { error } = await supabase
    .from("movies")
    .insert({
        title: title,
        release_year: releaseYear,
        actors: actors
    })
    // If an error is returned, print it to the console
    if (error) console.error(error);

    // Revalidate the path so the UI immediately updates
    // Without this, the new movie wouldn't show up until the page is manually reloaded
    revalidatePath('/'); // Set the path here to the page we want to revalidate
}

export async function deleteAllMovies() {
    // New supabase client
    const supabase = await createClient();
    // Remove everything with an ID (supabase doesn't let use just run delete on everything)
    const { error } = await supabase
    .from("movies")
    .delete()
    .not('id', 'is', 'null')
    // If an error is returned, print it to the console
    if (error) console.error(error);
    // Revalidate the path so the UI immediately updates
    revalidatePath('/');
}

// TODO: Add a function to delete a specific movie, and a function to edit a specific movie