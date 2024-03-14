import { twMerge } from "tailwind-merge"
import { IconCancel } from "./Icon"

export const ButtonCancelCircle = ({ className, onClick }) => {

  return (
    <button
      className={twMerge("size-10 rounded-full transition-all hover:bg-base-220 hover:dark:bg-base-54 center active:opacity-80 active:scale-98", className)}
      onClick={onClick}>
      <IconCancel />
    </button>
  )
}