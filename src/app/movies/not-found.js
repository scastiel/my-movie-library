import Link from 'next/link'

export default function MovieNotFound() {
  return (
    <>
      <h1>Movie not found</h1>
      <p>We haven’t been able to find a movie at this address.</p>
      <p>
        Perhaps you’d be interested in{' '}
        <Link href="/movies">Popular Movies</Link> instead?
      </p>
    </>
  )
}
