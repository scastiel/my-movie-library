import Link from 'next/link'
import { MovieList } from '../components/movie-list'

export const metadata = {
  title: 'My Movie Library',
  description: 'An app created with React and Next.js',
}

export default function HomePage() {
  const appTitle = 'My Movie Library'
  const hasMoreMovies = true

  const movies = [
    { id: 0, title: 'Indiana Jones and the Dial of Destiny' },
    { id: 1, title: 'Guardians of the Galaxy Vol. 3' },
    { id: 2, title: 'Mission: Impossible - Dead Reckoning Part One' },
    { id: 3, title: 'Spider-Man: Across the Spider-Verse' },
    { id: 4, title: 'The Super Mario Bros. Movie' },
  ]

  return (
    <main>
      <p>
        <Link href="/about">About</Link>
      </p>

      <h1>{appTitle}</h1>
      <p>Here is a list of popular movies:</p>

      <MovieList movies={movies} />

      <p>
        {hasMoreMovies ? (
          <a href="https://www.themoviedb.org/">See more</a>
        ) : (
          'Nothing more to see here.'
        )}
      </p>
    </main>
  )
}
