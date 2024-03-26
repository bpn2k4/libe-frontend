import { useEffect, useLayoutEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { IconMoon, IconSun } from './Icon'

export const ToggleTheme = ({ className }) => {

  const [theme, setTheme] = useState(getTheme)
  const isDark = theme == 'dark'

  const handleChangeTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  useLayoutEffect(() => {
    if (isDark) { document.documentElement.classList.add('dark') }
    else { document.documentElement.classList.remove('dark') }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      className={twMerge(
        'w-10 h-10 rounded-full relative overflow-hidden transition-all bg-primary',
        'hover:bg-gray-80 hover:dark:bg-gray-750 active:scale-95',
        className
      )}
      title='Change theme'
      onClick={handleChangeTheme}>
      <div className={twMerge(
        'absolute rounded-full offset-0 center transition-transform duration-300 text-black dark:text-white',
        isDark ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
      )}>
        <IconSun />
      </div>
      <div className={twMerge(
        'absolute rounded-full offset-0 center transition-transform duration-300 text-black dark:text-white',
        isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
      )}>
        <IconMoon />
      </div>
    </button>
  )
}

const getTheme = () => {
  const theme = localStorage.getItem('theme')
  if (theme) {
    if (theme == 'light' || theme == 'dark') return theme
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'light'
}