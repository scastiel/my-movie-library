import { NextResponse } from 'next/server'
import { searchMovies } from '../../../lib/tmdb'

export async function GET(req) {
  const query = new URL(req.url).searchParams.get('query')
  const movies = await searchMovies(query)
  return NextResponse.json(movies)
}
