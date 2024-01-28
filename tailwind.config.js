/** @type {import('~/types').utilities} */
const utilities = {
  '.bg-main': { '@apply bg-white dark:bg-black': 0 },
  '.text-main': { '@apply text-sm text-black dark:text-white': 0 },
  '.text-main-reverse': { '@apply text-sm text-white dark:text-black': 0 },
  '.border-main': { '@apply border-base-229 dark:border-base-54': 0 },
  '.offset-0': { top: 0, left: 0, right: 0, bottom: 0 },
  '.center': { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  '.clickable': { '@apply hover:scale-105 active:scale-95': 0 },
  '.pause-animation': { animationPlayState: 'paused' },
  '.run-animation': { animationPlayState: 'running' },
  '.skeleton': { "@apply overflow-hidden bg-base-219 dark:bg-base-54 animate-pulse after:content-[''] after:absolute after:h-full after:w-40 after:bg-gradient-to-r after:from-base-221 after:via-base-232 after:to-base-221 after:left-0 after:animate-left-to-right dark:after:from-base-55 dark:after:via-base-83 dark:after:to-base-55": 0 },
  '.no-scrollbar': {},
}
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          80: "rgb(242, 242, 242)",
          221: "rgb(221, 221, 221)",
          232: "rgb(232, 232, 232)",
          250: "rgb(219, 219, 219)",
          350: "rgb(168, 168, 168)",
          450: "rgb(115, 115, 115)",
          525: "rgb(91, 91, 91)",
          750: "rgb(54, 54, 54)",
          850: "rgb(38, 38, 38)",
          875: "rgb(26, 26, 26)",
          925: "rgb(10, 10, 10)",
        },
        base: {
          38: "rgb(38, 38, 38)",
          54: "rgb(54, 54, 54)",
          55: "rgb(55, 55, 55)",
          60: "rgb(60, 60, 60)",
          83: "rgb(83, 83, 83)",
          224: "rgb(242, 242, 242)",
          168: "rgb(168, 168, 168)",
          219: "rgb(219, 219, 219)",
          221: "rgb(221, 221, 221)",
          229: "rgb(229, 229, 229)",
          232: "rgb(232, 232, 232)",
        }
      },
      aspectRatio: {
        '1/2': '1 / 2',
        '9/14': '9 / 14',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      animation: {
        progress: 'progress 3s linear infinite',
        'left-to-right': 'left-to-right 1s linear infinite'
      },
      keyframes: {
        progress: {
          '0%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleX(0)' },
        },
        'left-to-right': {
          '0%': { left: '0%' },
          '100%': { left: '100%' },
        }
      }
    },
  },
  plugins: [
    ({ addUtilities }) => addUtilities(utilities)
  ],
}

