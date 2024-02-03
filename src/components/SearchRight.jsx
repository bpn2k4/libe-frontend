import { useLayoutEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { IconCancel, IconSearch } from './Icon'
import Util from '~/utils'
import { Link } from 'react-router-dom'

export const SearchRight = () => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState('')
  const ref = useRef()

  Util.searchRight = {
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
    if (setShow) ref.current?.focus()
  }, [show])

  return (
    <div className='MenuLeft text-main'>
      {show && <div className='fixed z-[10] offset-0 bg-black/50' onClick={() => setShow(false)} />}
      <div className={twMerge(
        'fixed z-[11] text-base top-0 right-0 bottom-0 w-full md:max-w-[400px] bg-main origin-right transition-transform duration-300',
        show ? 'scale-x-100' : 'scale-x-0'
      )}>
        <div className={twMerge(
          'absolute offset-0 flex flex-col px-4 py-4',
          show ? 'opacity-100 delay-300' : 'opacity-0 delay-0'
        )}>
          <div className='flex justify-end'>
            <button
              className='w-10 h-10 rounded-full hover:bg-gray-80 hover:dark:bg-gray-750 center active:scale-95'
              onClick={() => setShow(false)}>
              <IconCancel />
            </button>
          </div>
          <div className='relative'>
            <input
              className={twMerge(
                'my-2 w-full h-10 outline-none border border-main bg-transparent rounded pl-2',
                'focus-within:border-gray-450 dark:focus-within:border-gray-450 focus-within:border-2',
                value.length > 0 ? 'pr-[84px]' : 'pr-12'
              )}
              ref={ref}
              value={value}
              placeholder='Enter some thing...'
              onChange={e => setValue(e.target.value)} />
            <button className='absolute top-1/2 -translate-y-1/2 right-1 w-10 h-8 border rounded center border-main active:scale-95 active:opacity-80'>
              <IconSearch className='w-5 h-5' />
            </button>
            {value.length > 0 && (
              <button
                className='absolute top-1/2 -translate-y-1/2 right-12 w-8 h-8 rounded-full hover:bg-gray-80 hover:dark:bg-gray-750 center active:scale-95'
                onClick={() => {
                  setValue('')
                  ref.current?.focus()
                }}>
                <IconCancel />
              </button>
            )}
          </div>
          <div className='flex-1'>

          </div>
          <div>
            <Link
              className='w-full h-11 border border-main rounded font-semibold hover:bg-gray-80 hover:dark:bg-gray-750 center active:scale-[0.98] transition-transform'
              to='/search'
              onClick={() => setShow(false)}>
              Xem them ket qua
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}