import { useLayoutEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { IconCancel } from './Icon'
import Util from '~/utils'

export const CartRight = () => {
  const [show, setShow] = useState(false)

  Util.cartRight = {
    isShow: show,
    show: () => {
      setShow(true)
    },
    hide: () => {
      setShow(true)
    }
  }

  useLayoutEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'unset'
    document.body.style.paddingRight = show ? '6px' : 'unset'
  }, [show])

  return (
    <div className='MenuLeft text-main font-semibold'>
      {show && <div className='fixed z-[10] offset-0 bg-black/50' onClick={() => setShow(false)} />}
      <div className={twMerge(
        'fixed z-[11] text-base top-0 right-0 bottom-0 w-full md:max-w-[400px] bg-main origin-right transition-transform duration-300',
        show ? 'scale-x-100' : 'scale-x-0'
      )}>
        <div className={twMerge(
          'absolute offset-0 overflow-y-auto no-scrollbar pl-8 pr-4 pt-4',
          show ? 'opacity-100 delay-300' : 'opacity-0 delay-0'
        )}>
          <div className='flex justify-end'>
            <button
              className='w-10 h-10 rounded-full hover:bg-gray-80 hover:dark:bg-gray-750 center clickable'
              onClick={() => setShow(false)}>
              <IconCancel />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}