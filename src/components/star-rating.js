import { Fragment } from 'react'
import styles from './star-rating.module.css'

export function StarRating({ value, onChange }) {
  return (
    <div className={styles.starRating}>
      {[5, 4, 3, 2, 1].map((val) => (
        <Fragment key={val}>
          <input
            type="radio"
            id={`star${val}`}
            name="star-input"
            value={String(val)}
            checked={value === val}
            onChange={onChange}
          />
          <label htmlFor={`star${val}`} title={`${val} stars`}>
            {value} stars
          </label>
        </Fragment>
      ))}
    </div>
  )
}
