import { useEffect, useState } from 'react'

export function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    const storedTheme = localStorage.getItem(key)
    if (storedTheme) {
      setValue(storedTheme)
    }
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])

  return [value, setValue]
}
