import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { IconCaret } from './Icon'
import CheckBox from './CheckBox'
import { useDebounce } from '@hooks'


const Select = (props: SelectProps) => {

  const {
    className, cx,
    label,
    onSelect,
    closeOnSelect = true,
    options = [],
    iconCaret,
    disabled,
    position = 'top',
  } = props

  const [show, setShow] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const _show = useDebounce(show, show ? 0 : 400)
  const __show = useDebounce(show, show ? 100 : 0)

  useEffect(() => {

    const handleClickOutside = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node) && !buttonRef.current?.contains(e.target as Node)) {
        setShow(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }

  }, [menuRef])

  return (
    <div className={twMerge(
      'w-40 h-8 relative',
      'border border-primary rounded overflow-visible',
      className,
      cx?.wrapper
    )}>

      {iconCaret && (
        <span
          className={twMerge(
            'absolute right-1 top-1/2 -translate-y-1/2 transition-transform',
            show ? (position === 'top' ? '-rotate-90' : 'rotate-0') : 'rotate-90',
            cx?.icon
          )}>
          <IconCaret />
        </span>
      )}

      {label && (
        <span className={twMerge(
          'absolute left-2 top-1/2 -translate-y-1/2 line-clamp-1',
          iconCaret ? 'right-6' : 'right-2',
          cx?.label
        )}>
          {label}
        </span>
      )}

      {_show && (
        <div
          className={twMerge(
            'absolute left-0 right-0 overflow-visible transition-all',
            position === 'top' ? 'bottom-[calc(100%+4px)] origin-bottom' : 'top-[calc(100%+4px)] origin-top',
            __show ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0',
          )}
          ref={menuRef}>
          <div className={twMerge(
            'w-full max-h-[168px] py-1',
            'bg-secondary rounded overflow-y-auto scrollbar-w-4',
            'border border-primary',
            cx?.menu
          )}>
            {options.map((option, index) => (
              <button
                key={index}
                className={twMerge(
                  'w-full h-8 px-1',
                  'flex flex-row items-center gap-2',
                  !option.disabled && 'hover:bg-rgb-220 dark:hover:bg-rgb-40',
                  option.disabled && 'cursor-default',
                  cx?.item
                )}
                onClick={() => {
                  if (option.disabled) {
                    return
                  }

                  if (onSelect) {
                    onSelect(option)
                  }

                  if (closeOnSelect) {
                    setShow(false)
                  }

                }}>
                {option.checkbox && (
                  <CheckBox
                    className={cx?.option?.checkbox}
                    checked={option.checked}
                    disabled={option.disabled} />
                )}
                {option.label && (
                  <span className={twMerge(
                    'w-full pr-1 text-left line-clamp-1',
                    cx?.option?.label
                  )}>
                    {option.label}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}


      <button
        ref={buttonRef} className={twMerge(
          'absolute top-0 left-0 right-0 bottom-0 rounded',
          disabled && 'cursor-default'
        )}
        onClick={() => disabled ? 1 : setShow(!show)} />
    </div>
  )
}

type SelectProps = {
  className?: string,
  cx?: {
    wrapper?: string,
    label?: string,
    icon?: string,
    menu?: string,
    item?: string,
    option?: {
      checkbox?: string
      label?: string
    }
  },
  position?: 'top' | 'bottom'
  label?: string | number | React.ReactNode
  options?: SelectOption[],
  onSelect?: (option: SelectOption) => void
  closeOnSelect?: boolean
  iconCaret?: boolean,
  disabled?: boolean,
}

export type SelectOption = {
  id?: string | number,
  checkbox?: boolean,
  checked?: boolean,
  label?: string,
  value?: string | number,
  disabled?: boolean
}

export default Select