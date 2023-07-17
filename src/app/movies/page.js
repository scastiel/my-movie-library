import { MovieList } from '../../components/movie-list'
import { fetchPopularMovies } from '../../lib/tmdb'

export const metadata = {
  title: 'Movies',
}

export default async function MoviesPage() {
  const movies = await fetchPopularMovies()

  return (
    <>
      <h1>Popular Movies</h1>
      {movies !== null ? (
        <MovieList movies={movies} />
      ) : (
        <p>An error occurred 🙁</p>
      )}

      <p>
        <a href="https://www.themoviedb.org/">See more</a>
      </p>
    </>
  )
}
