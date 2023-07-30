import { notFound } from 'next/navigation'
import { fetchMovie } from '../../../lib/tmdb'
import styles from './page.module.css'
import { MoviePoster } from '../../../components/movie-poster'

export default async function MovieDetails({ movieId }) {
  const movie = await fetchMovie(movieId)

  if (!movie) {
    notFound()
  }

  return (
    <div className={styles.movieDetail}>
      <MoviePoster movie={movie} />
      <h1>
        {movie.title} <small>({movie.release_date.split('-')[0]})</small>
      </h1>
      <p>
        <em>{movie.tagline}</em>
      </p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Details</h3>
      <p>
        <strong>Release date:</strong>{' '}
        {new Date(movie.release_date).toLocaleDateString('en-CA', {
          dateStyle: 'long',
        })}
      </p>
      <p>
        <strong>Budget:</strong> ${movie.budget.toLocaleString('en-CA')}
      </p>
      <p>
        <strong>Revenue:</strong> ${movie.revenue.toLocaleString('en-CA')}
      </p>
    </div>
  )
}
