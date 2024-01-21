import { useLayoutEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Util from '~/utils'
import { IconCancel, IconCaret } from './Icon'

export const MenuLeft = () => {

  const [show, setShow] = useState(false)

  const collections = [
    {
      name: 'NEW IN',
      path: '/',
      sub: []
    },
    {
      name: 'CHÀO MÙA HOA | TẾT COLLECTION',
      path: '/',
      sub: []
    },
    {
      name: 'THONG DONG ĐÓN TẾT | EDITORIALS',
      path: '/',
      sub: []
    },
    {
      name: 'LUCKY & RED-Y SPRING ARRIVALS',
      path: '/',
      sub: []
    },
    {
      name: 'SALE',
      path: '/',
      sub: [
        { name: 'SALE TO 10%', path: '/' },
        { name: 'SALE TO 20%', path: '/' },
        { name: 'SALE TO 30%', path: '/' },
      ]
    },
    {
      name: 'SHOP',
      path: '/',
      sub: [
        { name: 'ALL', path: '/' },
        { name: 'TROUSERS', path: '/' },
        { name: 'SKIRTS & SHORTS', path: '/' },
        { name: 'DRESSES & JUMPSUITS', path: '/' },
      ]
    },
    {
      name: 'DENIM WEAR',
      path: '/',
      sub: []
    },
    {
      name: 'LIBÉ GOODS',
      path: '/',
      sub: []
    },
  ]

  Util.menuLeft = {
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
        'fixed z-[11] text-base top-0 left-0 bottom-0 w-full md:max-w-[400px] bg-main origin-left transition-transform duration-300',
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
          {collections.map(({ name, path, sub }, index) => (
            <ButtonCollection
              key={index}
              name={name}
              sub={sub} />
          ))}
        </div>
      </div>
    </div>
  )
}

const ButtonCollection = ({ name, path, sub = [] }) => {
  const [show, setShow] = useState(false)
  return (
    <div role='button' className='w-full flex flex-col'>
      {sub.length == 0 ? (
        <button className='block leading-8 transition-all rounded overflow-hidden hover:bg-gray-80 hover:dark:bg-gray-750 text-left pl-2'>
          {name}
        </button>
      ) : (
        <div className='flex flex-row items-center h-8'>
          <button className='px-2 hover:bg-gray-80 hover:dark:bg-gray-750 rounded leading-8'>
            {name}
          </button>
          <button
            className={twMerge(
              'ml-1 w-5 h-5 center hover:bg-gray-80 hover:dark:bg-gray-750 rounded-full transition-transform',
              show ? 'rotate-0' : 'rotate-90'
            )}
            onClick={() => setShow(!show)}>
            <IconCaret />
          </button>
        </div>
      )}
      {sub.map(({ name, path }, index) => (
        <button key={index} className={twMerge(
          'ml-4 block transition-all rounded overflow-hidden hover:bg-gray-80 hover:dark:bg-gray-750 pl-2 text-left',
          show ? 'leading-8' : 'leading-[0px]'
        )}>
          {name}
        </button>
      ))}
    </div>
  )
}