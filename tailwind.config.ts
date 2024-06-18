import { CSSProperties } from 'react'
import type { Config } from 'tailwindcss'

type Utilities = {
  [key: string]: CSSProperties | { [key: string]: 0 }
}

const utilities: Utilities = {
  '.bg-primary': { '@apply bg-rgb-235 dark:bg-rgb-20': 0 },
  '.bg-contrast': { '@apply bg-rgb-255 dark:bg-rgb-0': 0 },
  '.text-primary': { '@apply text-sm text-rgb-20 dark:text-rgb-235': 0 },
  '.text-contrast': { '@apply text-sm text-rgb-0 dark:text-rgb-255': 0 },
  '.center': { '@apply flex items-center justify-center': 0 },
  '.offset-0': { '@apply top-0 left-0 right-0 bottom-0': 0 },
  '.shadow-primary': { '@apply shadow-[0_4px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_4px_32px_0_rgba(0,0,0,0.1)]': 0 },
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
          20: 'rgb(20,20,20)',
          25: 'rgb(25,25,25)',
          60: 'rgb(60,60,60)',
          215: 'rgb(215,215,215)',
          230: 'rgb(230,230,230)',
          235: 'rgb(235,235,235)',
          240: 'rgb(240,240,240)',
          255: 'rgb(255,255,255)',
        },
      },
      spacing: {
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      }
    },
  },
  plugins: [
    ({ addUtilities }: any) => addUtilities(utilities)
  ],
}
export default config
