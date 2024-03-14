import { twMerge } from "tailwind-merge"
import { IconSpinner } from "./Icon"

/**@type {import('~/types').GroupButtonModal} */
export const GroupButtonModal = ({ className, cx, buttonLeft, buttonRight }) => {

  const _onClick = () => 1

  return (
    <div className={twMerge("w-full flex flex-row gap-1", className)}>
      <button className={twMerge("h-10 flex-1 border border-main rounded text-sm font-semibold", cx?.buttonLeft, buttonLeft?.className)}>
        Cancel
      </button>
      <button
        className={twMerge(
          "h-10 flex-1 center border border-main rounded text-sm font-semibold transition-all",
          buttonRight?.disable ? "cursor-default" : "active:scale-99 active:opacity-80 hover:opacity-80",
          cx?.buttonRight,
          buttonRight?.className)}
        onClick={buttonRight?.disable ? _onClick : buttonRight?.onClick}>
        {!buttonRight?.isLoading && (<IconSpinner className="mr-3" />)}
        OK
      </button>
    </div>
  )
}