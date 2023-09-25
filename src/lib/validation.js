export function validateReviewFormValues(formValues) {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'Please enter a name.';
  } else if (formValues.name.length < 3) {
    errors.name = 'Please enter at least 3 characters.';
  } else if (formValues.name.length > 20) {
    errors.name = 'Please enter at most 20 characters.';
  }

  if (!formValues.email) {
    errors.email = 'Please enter an email address.';
  } else if (!formValues.email.match(/^.+@.+$/)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!formValues.rating || formValues.rating <= 0 || formValues.rating > 5) {
    errors.rating = 'Please select a rating.';
  }

  if (!formValues.review) {
    errors.review = 'Please enter a review.';
  } else if (formValues.review.length < 10) {
    errors.review = 'Please enter at least 10 characters.';
  } else if (formValues.review.length > 500) {
    errors.review = 'Please enter at most 500 characters.';
  }

  return errors;
}
