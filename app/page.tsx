import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { Movie } from './types'
import MovieCard from './components/MovieCard'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: movies } = await supabase.from('movies').select()

  return (
    <ul>
      {movies?.map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  )
}