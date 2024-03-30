import { twMerge } from "tailwind-merge"
import { IconSpinner } from "./Icon"

/**@type {import('~/types').GroupButtonModal} */
export const GroupButtonModal = ({ className, cx, buttonLeft, buttonRight }) => {

  const _onClick = () => 1

  return (
    <div className={twMerge("w-full flex flex-row gap-1", className)}>
      <button className={twMerge(
        "h-10 flex-1 border border-primary rounded text-sm font-semibold hover:ring-[0.5px] active:scale-99",
        'hover:border-rgb-190 dark:hover:border-rgb-70',
        'hover:ring-rgb-190 dark:hover:ring-rgb-70',
        cx?.buttonLeft,
        buttonLeft?.className)}>
        Cancel
      </button>
      <button
        className={twMerge(
          "h-10 flex-1 center border border-primary rounded text-sm font-semibold transition-all",
          buttonRight?.disable ? "cursor-default" : "active:scale-99 active:opacity-80 hover:opacity-80",
          buttonRight?.disable ? "" : "hover:ring-[0.5px] hover:border-rgb-190 dark:hover:border-rgb-70 hover:ring-rgb-190 dark:hover:ring-rgb-70",
          cx?.buttonRight,
          buttonRight?.className)}
        onClick={buttonRight?.disable ? _onClick : buttonRight?.onClick}>
        {/* {!buttonRight?.isLoading && (<IconSpinner className="mr-3" />)} */}
        OK
      </button>
    </div>
  )
}