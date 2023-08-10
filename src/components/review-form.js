'use client'
import { useState } from 'react'
import styles from './review-form.module.css'
import { StarRating } from './star-rating'

function validateReviewFormValues(formValues) {
  const errors = {}

  if (!formValues.name) {
    errors.name = 'Please enter a name.'
  } else if (formValues.name.length < 3) {
    errors.name = 'Please enter at least 3 characters.'
  } else if (formValues.name.length > 20) {
    errors.name = 'Please enter at most 20 characters.'
  }

  if (!formValues.email) {
    errors.email = 'Please enter an email address.'
  } else if (!formValues.email.match(/^.+@.+$/)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!formValues.rating || formValues.rating <= 0 || formValues.rating > 5) {
    errors.rating = 'Please select a rating.'
  }

  if (!formValues.review) {
    errors.review = 'Please enter a review.'
  } else if (formValues.review.length < 10) {
    errors.review = 'Please enter at least 10 characters.'
  } else if (formValues.review.length > 500) {
    errors.review = 'Please enter at most 500 characters.'
  }

  return errors
}

export function ReviewForm({ movie }) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    rating: null,
    review: '',
  })
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()

    const errors = validateReviewFormValues(formValues)
    setErrors(errors)
    const hasErrors = Object.keys(errors).length > 0
    if (!hasErrors) {
      console.log('Submit form:', formValues)
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
        <button type="submit">Send</button>
      </div>
    </form>
  )
}
