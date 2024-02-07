/** @type {import('~/types').utilities} */
const utilities = {
  '.bg-main': { '@apply bg-white dark:bg-black': 0 },
  '.bg-main-reverse': { '@apply bg-black dark:bg-white': 0 },
  '.text-main': { '@apply text-black dark:text-white': 0 },
  '.text-main-reverse': { '@apply text-sm text-white dark:text-black': 0 },
  '.border-main': { '@apply border-base-200 dark:border-base-100': 0 },
  '.divide-main': { '@apply divide-base-230 dark:divide-base-100': 0 },
  '.offset-0': { top: 0, left: 0, right: 0, bottom: 0 },
  '.center': { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  '.clickable': { '@apply active:scale-95': 0 },
  '.pause-animation': { animationPlayState: 'paused' },
  '.run-animation': { animationPlayState: 'running' },
  '.skeleton': { "@apply overflow-hidden bg-base-219 dark:bg-base-54 animate-pulse after:content-[''] after:absolute after:h-full after:w-40 after:-skew-x-6 after:bg-gradient-to-r after:from-base-219 after:via-base-232 after:to-base-221 after:left-0 after:animate-left-to-right dark:after:from-base-55 dark:after:via-base-83 dark:after:to-base-55": 0 },
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
          10: "rgb(10, 10, 10)",
          20: "rgb(20, 20, 20)",
          26: "rgb(26, 26, 26)",
          30: "rgb(30, 30, 30)",
          38: "rgb(38, 38, 38)",
          40: "rgb(40, 40, 40)",
          50: "rgb(50, 50, 50)",
          54: "rgb(54, 54, 54)",
          55: "rgb(55, 55, 55)",
          60: "rgb(60, 60, 60)",
          83: "rgb(83, 83, 83)",
          90: "rgb(90, 90, 90)",
          100: "rgb(100, 100, 100)",
          115: "rgb(115, 115, 115)",
          168: "rgb(168, 168, 168)",
          200: "rgb(200, 200, 200)",
          219: "rgb(219, 219, 219)",
          221: "rgb(221, 221, 221)",
          224: "rgb(242, 242, 242)",
          229: "rgb(229, 229, 229)",
          232: "rgb(232, 232, 232)",
          242: "rgb(242, 242, 242)",
          255: "rgb(255, 255, 255)",
          190: "rgb(190, 190, 190)",
          200: "rgb(200, 200, 200)",
          210: "rgb(210, 210, 210)",
          220: "rgb(220, 220, 220)",
          230: "rgb(230, 230, 230)",
          240: "rgb(240, 240, 240)",
          245: "rgb(245, 245, 245)",
          250: "rgb(250, 250, 250)",
          255: "rgb(255, 255, 255)",
        }
      },
      aspectRatio: {
        '1/2': '1 / 2',
        '9/14': '9 / 14',
        '2/3': '2 / 3',
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
          '0%': { left: '-50%' },
          '100%': { left: '150%' },
        }
      }
    },
  },
  plugins: [
    ({ addUtilities }) => addUtilities(utilities)
  ],
}

