'use client'
import styles from './theme-switch.module.css'

export function ThemeSwitch() {
  return (
    <button
      onClick={(event) => {
        if (document.body.classList.contains('dark')) {
          document.body.classList.remove('dark')
          event.currentTarget.innerHTML = 'Light'
        } else {
          document.body.classList.add('dark')
          event.currentTarget.innerHTML = 'Dark'
        }
      }}
      className={styles.themeSwitch}
    >
      Light
    </button>
  )
}
