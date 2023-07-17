import { fetchMovie } from '../../../lib/tmdb'
import MovieDetails from './movie-details'

export async function generateMetadata({ params }) {
  const movie = await fetchMovie(params.movieId)
  if (!movie) {
    return { title: 'Movie not found' }
  }
  return { title: movie.title }
}

export default async function MoviePage({ params }) {
  return <MovieDetails movieId={params.movieId} />
}
