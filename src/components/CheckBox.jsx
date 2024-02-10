import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { IconCheck } from "./Icon"

/**@type {import('~/types').CheckBox} */
export const CheckBox = ({ className, label, cx, disable, checked, onClick }) => {

  const [check_, setCheck_] = useState(false)

  const _check = typeof (checked) == "undefined" ? check_ : checked
  const _onChange = typeof (onClick) == "undefined" ? (() => setCheck_(!check_)) : onClick

  const _onClick = disable ? (() => 1) : _onChange

  return (
    <div className={twMerge(
      'flex flex-col items-center group',
      disable ? 'cursor-default' : 'cursor-pointer',
      className
    )}>
      <div className={twMerge(
        'w-5 h-5 border-2 rounded relative overflow-hidden',
        !disable && 'group-active:scale-95',
        cx?.check
      )} onClick={_onClick}>
        <div className={twMerge(
          'absolute offset-0 center transition-transform',
          _check ? 'scale-100' : 'scale-0'
        )}>
          <IconCheck className='w-5 h-5' />
        </div>
      </div>
      <span onClick={_onClick}>{label}</span>
    </div>
  )
}