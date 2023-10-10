import { useEffect, useState } from 'react'
import { MovieList } from '../../components/movie-list'
import { delay } from '../../lib/helpers'

export function MovieSearchResults({ query }) {
  const { movies, loading } = useMoviesFromQuery(query)

  return (
    <>
      {loading && <p>Loading…</p>}
      {movies && <MovieList movies={movies} />}
    </>
  )
}

function useMoviesFromQuery(query) {
  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let isCurrent = true

    setLoading(true)
    delay(300).then(() => {
      if (isCurrent) {
        fetch(`/api/search-movies?query=${encodeURIComponent(query)}`)
          .then((res) => res.json())
          .then((movies) => {
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

  return { movies, loading }
}
