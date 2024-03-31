import { useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { IconCaret } from "./Icon"
import { CheckBox } from "./CheckBox"

/**@type {import('~/types').Select} */
export const Select = ({ className, disable = false, options = [], ref, onSelect, cx, checkBox, value, label, closeAfterSelect = true, position = 'bottom' }) => {

  const [show, setShow] = useState(false)

  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) setShow(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)

  }, [menuRef])

  const _onSelect = onSelect ?? (_ => 1)

  return (
    <div
      className={twMerge(
        'w-40 h-10 rounded border border-primary flex flex-row items-center pl-2 relative transition-all ring-0 pr-5',
        disable && 'cursor-default opacity-70',
        show && 'ring-[0.5px] ring-rgb-190 dark:ring-rgb-70 border-rgb-190 dark:border-rgb-70',
        'hover:border-rgb-190 dark:hover:border-rgb-70',
        'hover:ring-[0.5px] hover:ring-rgb-190 dark:hover:ring-rgb-70',
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
        'absolute top-1/2 left-1 -translate-y-1/2 px-1 bg-primary transition-all duration-300 text-primary text-sm',
        value && 'top-0 text-xs font-semibold',
        show && 'top-0 text-xs font-semibold',
        cx?.label
      )}>
        {label}
      </span>
      <span className={twMerge('', cx?.value)}>{value}</span>
      <div
        className={twMerge(
          'absolute z-[8] bg-main py-[2px] border border-primary rounded left-0 right-0 transition-all duration-300 overflow-y-auto shadow-primary',
          options.length > 0 && "py-[2px]",
          position == 'bottom' ? 'origin-top top-11' : 'origin-bottom bottom-9',
          show ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0',
          cx?.menu
        )}
        ref={menuRef}>
        {options.map((item, index) => (
          <button
            key={index}
            className={twMerge(
              'w-full flex flex-row h-8 items-center gap-1 px-1',
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
      <button
        className='absolute offset-0'
        onClick={() => disable ? 1 : setShow(!show)}
        ref={buttonRef} />
    </div>
  )
}