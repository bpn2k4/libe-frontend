import type { Config } from 'tailwindcss'

type Utilities = {
  [key: string]: React.CSSProperties | { [key: string]: 0 }
}

const utilities: Utilities = {
  '.bg-primary': { '@apply bg-rgb-240 dark:bg-rgb-20': 0 },
  '.bg-secondary': { '@apply bg-rgb-255 dark:bg-rgb-0': 0 },
  '.text-primary': { '@apply text-sm text-rgb-20 dark:text-rgb-235': 0 },
  '.text-secondary': { '@apply text-sm text-rgb-0 dark:text-rgb-255': 0 },
  '.border-primary': { '@apply border-rgb-200 dark:border-rgb-60': 0 },
  '.shadow-primary': { '@apply shadow-[0_4px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_4px_32px_0_rgba(0,0,0,0.1)]': 0 },
  '.skeleton': { "@apply overflow-hidden bg-rgb-215 dark:bg-rgb-60 animate-pulse after:content-[''] after:absolute after:h-full after:w-40 after:-skew-x-6 after:bg-gradient-to-r after:from-rgb-215 after:via-rgb-235 after:to-rgb-215 after:left-0 after:animate-skeleton dark:after:from-rgb-60 dark:after:via-rgb-85 dark:after:to-rgb-60": 0 },
  '.marquee': { '@apply inline-block animate-marquee': 0 },
  '.pause-animation': { animationPlayState: 'paused' },
  '.run-animation': { animationPlayState: 'running' },
  '.no-scrollbar': {},
  '.scrollbar-w-4': {},
  '.scrollbar-w-6': {},
  '.scrollbar-w-8': {},
  '.scrollbar-h-4': {},
  '.scrollbar-h-6': {},
  '.scrollbar-h-8': {},
}

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      space: {
        '0.5': '0.125rem',
        '2.5': '0.625rem',
        '4.5': '1.125rem',
      },
      height: {
        '25': '6.25rem',
      },
      maxWidth: {
        '100': '25rem',
        '150': '37.5rem',
      },
      maxHeight: {
        '42': '10.5rem',
      },
      minHeight: {
        '50': '12.5rem',
      },
      borderWidth: {
        '10': '10px',
      },
      borderRadius: {
        '32': '32px',
      },
      scale: {
        '97': '0.97',
        '98': '0.98',
        '99': '0.99',
      },
      colors: {
        rgb: {
          0: 'rgb(0,0,0)',
          10: 'rgb(10,10,10)',
          15: 'rgb(15,15,15)',
          20: 'rgb(20,20,20)',
          25: 'rgb(25,25,25)',
          30: 'rgb(30,30,30)',
          40: 'rgb(40,40,40)',
          60: 'rgb(60,60,60)',
          85: 'rgb(85,85,85)',
          100: 'rgb(100,100,100)',
          150: 'rgb(150,150,150)',
          200: 'rgb(200,200,200)',
          210: 'rgb(210,210,210)',
          215: 'rgb(215,215,215)',
          220: 'rgb(220,220,220)',
          230: 'rgb(230,230,230)',
          235: 'rgb(235,235,235)',
          240: 'rgb(240,240,240)',
          245: 'rgb(245,245,245)',
          250: 'rgb(250,250,250)',
          255: 'rgb(255,255,255)',
        },
        blue: {
          40: 'rgb(81,128,251)',
          60: 'rgb(52,101,229)',
          80: 'rgb(32,77,194)',
        }
      },
      spacing: {
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '99': '99',
        '100': '100',
      },
      aspectRatio: {
        '1/1': '1 / 1',
        '1/2': '1 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
        '16/9': '16 / 9',
        '2/1': '2 / 1',
        '3/1': '3 / 1',
      },
      animation: {
        'skeleton': 'skeleton 1s linear infinite',
        'marquee': '3s marquee infinite linear'
      },
      keyframes: {
        'skeleton': {
          '0%': { left: '-50%' },
          '100%': { left: '150%' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ({ addUtilities }: any) => addUtilities(utilities)
  ],
}
export default config
