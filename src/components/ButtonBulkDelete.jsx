import { twMerge } from "tailwind-merge"
import { IconTrashCan } from "./Icon"

const ButtonBulkDelete = ({ className, onClick, isLoading, number = 1 }) => {

  return (
    <button className={twMerge(
      'h-9 rounded border border-primary bg-red-400 flex items-center justify-center gap-2 px-2 active:scale-98 transition-all',
      'hover:border-rgb-190 dark:hover:border-rgb-70',
      'hover:ring-[0.5px] hover:ring-rgb-190 dark:hover:ring-rgb-70',
      className
    )}
      onClick={onClick}>
      <IconTrashCan className='stroke-1 size-5' />
      <span>Delete {number}</span>
    </button>
  )
}

export default ButtonBulkDelete