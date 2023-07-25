'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { searchMovies } from '../../lib/tmdb'
import { MovieList } from '../../components/movie-list'
import { delay } from '../../lib/helpers'

export default function SearchPage() {
  const [query, setQuery] = useState('')
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
      <h1>Search Movies</h1>

      <div className={styles.searchForm}>
        <label htmlFor="query">Query:</label>
        <input
          id="query"
          type="text"
          query={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {loading && <p>Loading…</p>}
      {movies && <MovieList movies={movies} />}
    </>
  )
}
