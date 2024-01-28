import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { IconCheck } from "./Icon"

/**@type {import('~/types').CheckBox} */
export const CheckBox = ({ className, label, cx, disable, checked, onClick }) => {

  const _onClick = disable ? (() => 1) : onClick

  return (
    <div className={twMerge(
      'flex flex-col items-center',
      disable ? 'cursor-default' : 'cursor-pointer',
      className
    )}>
      <div className={twMerge(
        'w-5 h-5 border-2 rounded relative overflow-hidden',
        cx?.check
      )} onClick={_onClick}>
        <div className={twMerge(
          'absolute offset-0 center transition duration-300',
          checked ? 'scale-100' : 'scale-0'
        )}>
          <IconCheck className='w-5 h-5' />
        </div>
      </div>
      <span onClick={_onClick}>{label}</span>
    </div>
  )
}