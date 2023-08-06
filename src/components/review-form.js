'use client'
import { useState } from 'react'
import styles from './review-form.module.css'
import { StarRating } from './star-rating'

export function ReviewForm({ movie }) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    rating: null,
    review: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submit form:', formValues)
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
      </section>
      <section>
        <label>Your rating</label>
        <StarRating
          value={formValues.rating}
          onChange={(event) =>
            setFormValues({ ...formValues, rating: Number(event.target.value) })
          }
        />
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
      </section>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  )
}
