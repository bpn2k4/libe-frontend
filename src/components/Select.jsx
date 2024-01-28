import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { IconCaret } from "./Icon"
import { CheckBox } from "./CheckBox"

/**@type {import('~/types').Select} */
export const Select = ({ className, disable = false, options = [], ref, onSelect, cx, checkBox, value, label, closeAfterSelect = true }) => {

  const [show, setShow] = useState(false)
  const _onSelect = onSelect ?? (_ => 1)

  return (
    <div
      className={twMerge(
        'w-40 h-10 rounded border border-main flex flex-row items-center px-2 relative transition-all ring-0',
        disable && 'cursor-default opacity-70',
        show && 'ring-1 ring-base-115 dark:ring-base-115 border-base-115 dark:border-base-115',
        className,
        cx?.wrapper
      )}>
      <span className={twMerge(
        'absolute right-2 top-1/2 -translate-y-1/2 transition-transform duration-300',
        show ? 'rotate-0' : '-rotate-90'
      )}>
        <IconCaret />
      </span>
      <span className={twMerge(
        'absolute top-1/2 left-1 -translate-y-1/2 px-1 bg-main transition-all duration-300 text-main text-sm',
        value && 'top-0 text-xs',
        show && 'top-0 text-xs',
        cx?.label
      )}>
        {label}
      </span>
      <span className={twMerge('', cx?.value)}>{value}</span>
      <div className={twMerge(
        'absolute z-[8] bg-main p-[2px] border border-main shadow rounded left-0 right-0 -bottom-1 translate-y-full transition-all duration-300 origin-top overflow-y-auto',
        show ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0',
        cx?.menu
      )}>
        {options.map((item, index) => (
          <button
            key={index}
            className={twMerge(
              'w-full flex flex-row h-8 items-center gap-1 px-[2px]',
              !item.disable && 'hover:bg-base-242 hover:dark:bg-base-54',
              cx?.item
            )}
            onClick={() => {
              _onSelect(item)
              if (closeAfterSelect) setShow(false)
            }}>
            {checkBox && (
              <CheckBox />
            )}
            <span>{item.display}</span>
          </button>
        ))}
      </div>
      <button className='absolute offset-0' onClick={() => disable ? 1 : setShow(!show)} />
    </div>
  )
}