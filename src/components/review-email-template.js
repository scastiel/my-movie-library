export function ReviewEmailTemplate({ movie, formData }) {
  return (
    <>
      <p>
        {formData.name} just sent you a review of <strong>{movie.title}</strong>
        :
      </p>
      <p>Rating: {'⭐️'.repeat(formData.rating)}</p>
      <blockquote>{formData.review}</blockquote>
    </>
  )
}
