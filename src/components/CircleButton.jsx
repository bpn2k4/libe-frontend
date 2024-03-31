import { twMerge } from 'tailwind-merge'

const CircleButton = ({ children, className, icon, onClick }) => {

  return (
    <button
      className={twMerge(
        'size-10 rounded-full center active:scale-95 transition-all',
        'hover:bg-rgb-217 active:bg-rgb-195',
        'dark:hover:bg-rgb-61 dark:active:bg-rgb-60',
        className
      )}
      onClick={onClick}>
      {children}
      {icon}
    </button>
  )
}

export default CircleButton