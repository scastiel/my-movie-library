'use client'
import { useState } from 'react'
import styles from './review-form.module.css'
import { StarRating } from './star-rating'
import { validateReviewFormValues } from '../lib/validation'

export function ReviewForm({ movieId }) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    rating: null,
    review: '',
  })
  const [errors, setErrors] = useState({})

  const [submitStatus, setSubmitStatus] = useState('not_submitted')

  const handleSubmit = (event) => {
    event.preventDefault()

    const errors = validateReviewFormValues(formValues)
    setErrors(errors)
    const hasErrors = Object.keys(errors).length > 0
    if (!hasErrors) {
      setSubmitStatus('submitting')
      fetch(`/movies/${movieId}/submit-review`, {
        method: 'POST',
        body: JSON.stringify(formValues),
      })
        .then((res) => res.json())
        .then((data) => {
          setSubmitStatus('submitted')
          console.log(data)
        })
        .catch((err) => {
          setSubmitStatus('submit_error')
          console.error(err)
        })
    }
  }

  return (
    <form className={styles.reviewForm} onSubmit={handleSubmit}>
      <h3>Send a review to a friend</h3>
      <section>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          value={formValues.name}
          onChange={(event) =>
            setFormValues({
              ...formValues,
              name: event.target.value,
            })
          }
        />
        {errors.name && <div className={styles.error}>{errors.name}</div>}
      </section>
      <section>
        <label htmlFor="email">Your friend’s email address</label>
        <input
          type="text"
          id="email"
          value={formValues.email}
          onChange={(event) =>
            setFormValues({
              ...formValues,
              email: event.target.value,
            })
          }
        />
        {errors.email && <div className={styles.error}>{errors.email}</div>}
      </section>
      <section>
        <label>Your rating</label>
        <StarRating
          value={formValues.rating}
          onChange={(event) =>
            setFormValues({ ...formValues, rating: Number(event.target.value) })
          }
        />
        {errors.rating && <div className={styles.error}>{errors.rating}</div>}
      </section>
      <section>
        <label htmlFor="review">Your review</label>
        <textarea
          id="review"
          value={formValues.review}
          onChange={(event) =>
            setFormValues({
              ...formValues,
              review: event.target.value,
            })
          }
        />
        {errors.review && <div className={styles.error}>{errors.review}</div>}
      </section>
      <div>
        <button type="submit" disabled={submitStatus === 'submitting'}>
          {submitStatus === 'submitting' ? 'Sending…' : 'Send'}
        </button>
      </div>
      {submitStatus === 'submit_error' && (
        <p>An error occurred when sending the review.</p>
      )}
      {submitStatus === 'submitted' && <p>Your review was sent!</p>}
    </form>
  )
}
