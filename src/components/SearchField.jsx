import { twMerge } from "tailwind-merge"
import { ButtonCancelCircle } from "./ButtonCancelCircle"
import { IconSpinner } from "./Icon"
import { useState } from "react"

export const SearchField = ({ className, value, onChange, cx, placeHolder, showIconClear, onClickButtonClear, isLoading, options, renderItem }) => {

  const [show, setShow] = useState(true)

  return (
    <div className={twMerge("relative", className)}>
      <input
        className={twMerge(
          'outline-none w-full h-10 border pl-2 pr-2 border-base-219 dark:border-base-54 rounded bg-transparent transition-all hover:border-base-115 dark:hover:border-base-115 hover:ring-[0.5px] hover:ring-base-115 dark:hover:ring-base-115',
          'focus-within:border-base-115 dark:focus-within:border-base-115 focus-within:ring-[0.5px] focus-within:ring-base-115 dark:focus-within:ring-base-115',
          cx?.input
        )}
        value={value}
        placeholder={placeHolder}
        onChange={onChange} />
      {showIconClear && !isLoading && (
        <ButtonCancelCircle
          className="size-8 absolute top-1 right-[6px]"
          onClick={onClickButtonClear} />
      )}
      {/* {isLoading && (<IconSpinner className="absolute top-3 right-[14px] size-4" />)} */}
    </div>
  )
}