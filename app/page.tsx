import { createClient } from '@/utils/supabase/server'
import { Movie } from './types'
import MovieCard from './components/MovieCard'
import { AddMovieButtonExample } from './components/AddMovieButtonExample'
import { DeleteAllMoviesButton } from './components/DeleteAllMoviesButton'

export default async function Page() {
  // Supabase client
  const supabase = await createClient()

  // Get all movies from the database
  const { data: movies } = await supabase.from('movies').select()

  return (
    <div className="flex gap-2 m-2">
      {/* TODO: Replace this with a proper form for adding movies with user-provided information */}
      <AddMovieButtonExample></AddMovieButtonExample>
      <DeleteAllMoviesButton></DeleteAllMoviesButton>
    <ul>
      {movies?.toReversed().map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
    </div>
  )
}