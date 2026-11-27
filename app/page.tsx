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
    <div className="m-2">
      {/* TODO: Replace this with a proper form for adding movies with user-provided information */}
      <div className="flex gap-2 pb-2">
      <AddMovieButtonExample></AddMovieButtonExample>
      <DeleteAllMoviesButton></DeleteAllMoviesButton>
      </div>
    <div className="flex gap-2 flex-col">
      {movies?.toReversed().map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
    </div>
  )
}