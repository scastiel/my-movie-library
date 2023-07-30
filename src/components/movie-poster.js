'use client'
import styles from './movie-poster.module.css'

export function MoviePoster({ movie }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={styles.moviePoster}
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      width={200}
      height={300}
      alt=""
      onClick={(event) => {
        const image = event.target
        image.classList.toggle(styles.big)
      }}
    />
  )
}
