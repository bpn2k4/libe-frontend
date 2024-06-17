import { createSlice } from '@reduxjs/toolkit'

/**
 * Retrieves the current theme from localStorage or system preferences.
 */
const getTheme = () => {
  const theme = localStorage.getItem('theme')
  if (theme) {
    if (theme == 'light' || theme == 'dark') return theme
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'dark'
}

/**
 * Initializes the theme by setting the appropriate class on the document element
 * and storing the theme in localStorage.
 */
const initTheme = () => {
  const theme = getTheme()
  if (theme == 'dark') { document.documentElement.classList.add('dark') }
  else { document.documentElement.classList.remove('dark') }
  localStorage.setItem('theme', theme)
  return theme
}

const initialState: SystemState = {
  theme: initTheme(),
  windowHeight: null,
  windowWidth: null,
}

const systemSlice = createSlice({
  name: 'SystemSlice',
  initialState: initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload
      if (payload == 'light') {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      }
    }
  }
})

const systemReducer = systemSlice.reducer
export default systemReducer
export const { setTheme } = systemSlice.actions


/** 
 * Type definition for the system state.
 * @property {'light' | 'dark'} theme - The current theme.
 * @property {number | null} windowWidth - The current window width.
 * @property {number | null} windowHeight - The current window height.
 */
type SystemState = {
  theme: 'light' | 'dark',
  windowWidth: number | null,
  windowHeight: number | null,
}