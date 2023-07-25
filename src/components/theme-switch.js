'use client'
import { useState } from 'react'
import styles from './theme-switch.module.css'

export function ThemeSwitch() {
  const [theme, setTheme] = useState('light')

  return (
    <button
      onClick={() => {
        if (theme === 'dark') {
          document.body.classList.remove('dark')
          setTheme('light')
        } else {
          document.body.classList.add('dark')
          setTheme('dark')
        }
      }}
      className={styles.themeSwitch}
    >
      {theme === 'light' ? 'Light' : 'Dark'}
    </button>
  )
}
