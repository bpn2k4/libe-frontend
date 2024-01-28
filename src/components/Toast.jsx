import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { IconCancel, IconSpinner } from './Icon'

export const Toast = () => {

  return (
    <div
      className='fixed top-0 right-0 z-[999] gap-4 py-4 bottom-0 overflow-y-auto no-scrollbar pr-2'
    >
      <ToastItem
        title={'Success'}
        message={'Your request is successful Your request is successful Your request is successful Your request is successful'}
      />
    </div>
  )
}

const ToastItem = ({ type, title, message }) => {

  return (
    <div className={twMerge(
      'w-[450px] p-4 bg-white rounded-md flex items-center relative text-sm overflow-hidden group',

    )}>
      <div className='py-2'>
        <IconSpinner />
      </div>
      <div className='flex-1 flex flex-col justify-center ml-4'>
        {title && (
          <span className='font-semibold'>{title}</span>
        )}
        {message && (
          <span className='leading-4'>{message}</span>
        )}
      </div>
      <button
        className='absolute top-2 right-2 p-1 rounded-full hover:scale-105 active:scale-95 transition-transform hover:!bg-gray-80'
        title={'Close'}>
        <IconCancel className='w-7 h-7' />
      </button>
      <ToastProgressBar />
    </div>
  )
}

const ToastProgressBar = ({ duration = 5000, pauseOnHover = true }) => {

  return (
    <div className='absolute bottom-0 left-0 right-0 h-[5px]'>
      <div
        className={twMerge(
          'w-full h-full bg-blue-500 origin-left animate-progress',
          pauseOnHover && 'group-hover:pause-animation'
        )}
        style={{ animationDuration: `${duration}ms` }}
      />
    </div>
  )
}