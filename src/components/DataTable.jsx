import { twMerge } from 'tailwind-merge'

/**@type {import('~/types').DataTable} */
export const DataTable = ({ className }) => {

  return (
    <div className={twMerge(
      '',
      className
    )}>

    </div>
  )
}