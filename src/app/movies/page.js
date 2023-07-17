import { MovieList } from '../../components/movie-list'
import { NavMenu } from '../../components/nav-menu'

export const metadata = {
  title: 'Movies',
}

export default function MoviesPage() {
  const movies = [
    { id: 0, title: 'Indiana Jones and the Dial of Destiny' },
    { id: 1, title: 'Guardians of the Galaxy Vol. 3' },
    { id: 2, title: 'Mission: Impossible - Dead Reckoning Part One' },
    { id: 3, title: 'Spider-Man: Across the Spider-Verse' },
    { id: 4, title: 'The Super Mario Bros. Movie' },
  ]

  return (
    <main>
      <NavMenu />
      <h1>Popular Movies</h1>

      <MovieList movies={movies} />

      <p>
        <a href="https://www.themoviedb.org/">See more</a>
      </p>
    </main>
  )
}
