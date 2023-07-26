import { useEffect, useState } from 'react'
import { MovieList } from '../../components/movie-list'
import { delay } from '../../lib/helpers'
import { searchMovies } from '../../lib/tmdb'

export function MovieSearchResults({ query }) {
  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let isCurrent = true

    setLoading(true)
    delay(300).then(() => {
      if (isCurrent) {
        searchMovies(query).then((movies) => {
          if (isCurrent) {
            setMovies(movies)
            setLoading(false)
          }
        })
      }
    })

    return () => {
      isCurrent = false
    }
  }, [query])

  return (
    <>
      {loading && <p>Loading…</p>}
      {movies && <MovieList movies={movies} />}
    </>
  )
}
