'use client'
import { useState } from 'react'
import styles from './page.module.css'
import { MovieSearchResults } from './movie-search-results'

export default function SearchPage() {
  const [query, setQuery] = useState('')

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

      <MovieSearchResults query={query} />
    </>
  )
}
