import { Link } from 'react-router-dom'

import { twMerge } from '@hooks'

const ButtonIconRounded = (props: ButtonIconRoundedProps) => {

  const { icon, link, onClick, className } = props

  return (
    link ? (
      <Link
        className={twMerge('size-10 center rounded-full text-primary hover:bg-rgb-215 dark:hover:bg-rgb-60', className)}
        to={link} >
        {icon}
      </Link>
    ) : (
      <button
        className={twMerge('size-10 center rounded-full text-primary hover:bg-rgb-215 dark:hover:bg-rgb-60', className)}
        onClick={onClick}>
        {icon}
      </button>
    )
  )
}

export default ButtonIconRounded

type ButtonIconRoundedProps = {
  className?: string,
  icon?: React.ReactNode,
  link?: string
  onClick?: () => void
}