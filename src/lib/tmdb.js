export async function fetchPopularMovies() {
  // await delay(2000)
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  try {
    const res = await fetch(url)
    if (res.status !== 200) return null
    const data = await res.json()
    return data.results
  } catch (err) {
    console.error(err)
    return null
  }
}

export async function fetchMovie(movieId) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  try {
    const res = await fetch(url)
    if (res.status !== 200) return null

    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
    return null
  }
}

export async function searchMovies(query) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  const encodedQuery = encodeURIComponent(query)
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&api_key=${apiKey}`
  try {
    const res = await fetch(url)
    if (res.status !== 200) return null
    const data = await res.json()
    return data.results
  } catch (err) {
    console.error(err)
    return null
  }
}
