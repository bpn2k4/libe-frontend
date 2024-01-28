import { useId } from 'react'
import { twMerge } from 'tailwind-merge'

/**@type {import('~/types').TextField} */
export const TextField = ({
  className,
  cx,
  required,
  label,
  value,
  onChange,
  maxLength,
  type,
  iconLeft,
  error,
  helperText
}) => {

  const id = useId()

  return (
    <div className={twMerge('w-full text-sm relative group', className)}>
      <input
        className={twMerge(
          'outline-none w-full h-10 border pl-2 border-gray-250 dark:border-gray-750 rounded bg-transparent transition-all hover:border-gray-450 dark:hover:border-gray-450 hover:ring-1 hover:ring-base-115 dark:hover:ring-base-115',
          'focus-within:border-base-115 dark:focus-within:border-base-115 focus-within:ring-1 focus-within:ring-base-115 dark:focus-within:ring-base-115',
          error && 'border-red-500 dark:border-red-500',
          cx?.input
        )}
        id={id}
        type={type}
        maxLength={maxLength}
        value={value}
        onChange={onChange} />
      {label && (
        <label
          htmlFor={id}
          className={twMerge(
            'absolute cursor-text top-1/2 -translate-y-1/2 left-2 transition-all bg-main px-1 opacity-75 duration-300',
            'group-focus-within:top-0 group-focus-within:opacity-100 group-focus-within:text-xs',
            required && "after:content-['*'] after:ml-0.5 after:text-red-500",
            value && 'top-0 opacity-100 text-xs',
            cx?.label
          )}>
          {label}
        </label>
      )}
      {typeof helperText != 'undefined' && (
        <span className={twMerge(
          'absolute -bottom-4 left-2 text-xs transition-transform origin-top',
          error && 'text-red-500',
          error ? 'scale-y-100' : 'scale-y-0',
          cx?.helperText
        )}>
          {helperText}
        </span>
      )}
    </div>
  )
}