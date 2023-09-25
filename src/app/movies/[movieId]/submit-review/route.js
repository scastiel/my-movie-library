import { NextResponse } from 'next/server'
import { validateReviewFormValues } from '../../../../lib/validation'
import { Resend } from 'resend'
import { fetchMovie } from '../../../../lib/tmdb'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req, { params }) {
  const movie = await fetchMovie(params.movieId)
  if (!movie) {
    return NextResponse.json({ success: false }, { status: 404 })
  }

  const formData = await req.json()
  const errors = validateReviewFormValues(formData)
  const hasErrors = Object.keys(errors).length > 0
  if (hasErrors) {
    return NextResponse.json({ success: false, errors }, { status: 422 })
  }

  try {
    const stars = '⭐️'.repeat(formData.rating)
    const payload = {
      from: `My Movie Library <onboarding@resend.dev>`,
      to: [formData.email],
      subject: `${formData.name}’s review of ${movie.title}: ${stars}`,
      html: `
        <p>${formData.name} just sent you a review of <strong>${movie.title}</strong>:</p>
        <p>Rating: ${stars}</p>
        <blockquote>${formData.review}</blockquote>
      `,
    }
    await resend.emails.send(payload)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }

  return NextResponse.json({ success: true, formData })
}
