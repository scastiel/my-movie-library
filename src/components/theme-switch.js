'use client'
import { useEffect, useState } from 'react'
import styles from './theme-switch.module.css'

export function ThemeSwitch() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
      className={styles.themeSwitch}
    >
      {theme === 'light' ? 'Light' : 'Dark'}
    </button>
  )
}
