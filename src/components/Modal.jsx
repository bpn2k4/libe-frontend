import { useLayoutEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { useDebounce } from '~/hooks'

export const Modal = ({ className, show, children, onClickOutsize }) => {

  const ref = useRef()

  useLayoutEffect(() => {
    if (show) {
      document.body.style.overflow = show ? 'hidden' : 'unset'
      document.body.style.paddingRight = show ? '6px' : 'unset'
    }
  }, [show])

  const _show = useDebounce(show, show ? 0 : 400)
  const __show = useDebounce(show, show ? 100 : 0)

  return _show ? (
    <div
      className={twMerge(
        "z-[99] fixed offset-0 bg-black/50 center transition-all duration-300 origin-top",
        __show ? "opacity-100" : "opacity-0",
        className
      )}>
      <div
        className="absolute offset-0 z-[1]"
        ref={ref}
        onClick={onClickOutsize} />
      {children}
    </div>
  ) : <></>
}