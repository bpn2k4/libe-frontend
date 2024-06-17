import { CSSProperties } from 'react'
import type { Config } from 'tailwindcss'

type Utilities = {
  [key: string]: CSSProperties | { [key: string]: 0 }
}

const utilities: Utilities = {
  '.bg-primary': { '@apply bg-rgb-240 dark:bg-rgb-15': 0 },
  '.text-primary': { '@apply text-sm text-rgb-15 dark:text-rgb-240': 0 },
}

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      scale: {
      },
      colors: {
        rgb: {
          0: 'rgb(0,0,0)',
          15: 'rgb(15,15,15)',
          240: 'rgb(240,240,240)',
          255: 'rgb(255,255,255)',
        },
      },
      spacing: {
      }
    },
  },
  plugins: [
    ({ addUtilities }: any) => addUtilities(utilities)
  ],
}
export default config
