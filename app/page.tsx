import { createClient } from '@/utils/supabase/server'
import { Movie } from './types'
import MovieCard from './components/MovieCard'
import { AddMovieButtonExample } from './components/AddMovieButtonExample'

export default async function Page() {
  const supabase = await createClient()

  const { data: movies } = await supabase.from('movies').select()

  return (
    <div>
      <AddMovieButtonExample></AddMovieButtonExample>
    <ul>
      {movies?.map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
    </div>
  )
}