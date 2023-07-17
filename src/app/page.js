export default function HomePage() {
  const appTitle = 'My Movie Library'
  const hasMoreMovies = true

  return (
    <main>
      <h1>{appTitle}</h1>
      <p>Here is a list of popular movies:</p>
      <ul className="movie-list">
        <li className="featured">Indiana Jones and the Dial of Destiny</li>
        <li>Guardians of the Galaxy Vol. 3</li>
        <li>Mission: Impossible - Dead Reckoning Part One</li>
        <li>Spider-Man: Across the Spider-Verse</li>
        <li>The Super Mario Bros. Movie</li>
      </ul>
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
