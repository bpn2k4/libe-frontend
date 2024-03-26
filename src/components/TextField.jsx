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
  helperText,
  showLength
}) => {

  const id = useId()

  return (
    <div className={twMerge('w-full text-sm relative group', className)}>
      <input
        className={twMerge(
          'outline-none w-full h-10 border pl-2 pr-2 border-base-219 dark:border-base-54 rounded bg-transparent transition-all hover:border-base-115 dark:hover:border-base-115 hover:ring-[0.5px] hover:ring-base-115 dark:hover:ring-base-115',
          'focus-within:border-base-115 dark:focus-within:border-base-115 focus-within:ring-[0.5px] focus-within:ring-base-115 dark:focus-within:ring-base-115',
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
            'absolute cursor-text top-1/2 -translate-y-1/2 left-2 transition-all bg-primary px-1 opacity-75 duration-300',
            'group-focus-within:top-0 group-focus-within:opacity-100 group-focus-within:text-xs group-focus-within:font-semibold',
            required && "after:content-['*'] after:ml-0.5 after:text-red-500",
            value && 'top-0 opacity-100 text-xs font-semibold',
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
      {/* {true && (
        <span className={twMerge(
          'absolute -bottom-4 right-2 text-xs transition-transform origin-top',
          cx?.helperText
        )}>
          {value?.length}/{maxLength}
        </span>
      )} */}
    </div>
  )
}