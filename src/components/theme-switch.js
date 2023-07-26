'use client'
import { useEffect } from 'react'
import styles from './theme-switch.module.css'
import { useLocalStorageState } from '../lib/hooks'

export function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorageState('theme', 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
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
