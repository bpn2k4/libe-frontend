/** @type {import('~/types').utilities} */
const utilities = {
  '.bg-main': { '@apply bg-white dark:bg-black': 0 },
  '.text-main': { '@apply text-sm text-black dark:text-white': 0 },
  '.text-main-reverse': { '@apply text-sm text-white dark:text-black': 0 },
  '.border-main': { '@apply border-gray-250 dark:border-gray-750': 0 },
  '.offset-0': { top: 0, left: 0, right: 0, bottom: 0 },
  '.center': { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  '.clickable': { '@apply hover:scale-105 active:scale-95': 0 },
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
          250: "rgb(219, 219, 219)",
          350: "rgb(168, 168, 168)",
          450: "rgb(115, 115, 115)",
          750: "rgb(54, 54, 54)",
          850: "rgb(38, 38, 38)",
          875: "rgb(26, 26, 26)",
          925: "rgb(10, 10, 10)",
        },
      },
      aspectRatio: {
        '1/2': '1 / 2',
        '9/14': '9 / 14',
      }
    },
  },
  plugins: [
    ({ addUtilities }) => addUtilities(utilities)
  ],
}

