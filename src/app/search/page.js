'use client'
import { useState } from 'react'
import styles from './page.module.css'
import { searchMovies } from '../../lib/tmdb'
import { MovieList } from '../../components/movie-list'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const movies = await searchMovies(query)
    setMovies(movies)
    setLoading(false)
  }

  return (
    <>
      <h1>Search Movies</h1>

      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <label htmlFor="query">Query:</label>
        <input
          id="query"
          type="text"
          query={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading…</p>}
      {movies && <MovieList movies={movies} />}
    </>
  )
}
