'use client'
import { useEffect } from 'react'
import styles from './theme-switch.module.css'
import { useLocalStorageState } from '../lib/hooks'

export function ThemeSwitch() {
  const [theme, toggleTheme] = useTheme()

  return (
    <button onClick={() => toggleTheme()} className={styles.themeSwitch}>
      {theme === 'light' ? 'Light' : 'Dark'}
    </button>
  )
}

function useTheme() {
  const [theme, setTheme] = useLocalStorageState('theme', 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return [theme, toggleTheme]
}
