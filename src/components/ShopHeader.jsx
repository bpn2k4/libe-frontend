import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToggleTheme } from './ToggleTheme'
import Util from '~/utils'
import { IconCart, IconSearch, IconThreeLine, IconUser } from './Icon'
import { twMerge } from 'tailwind-merge'
import { useTranslation } from 'react-i18next'

export const ShopHeader = () => {

  return (
    <header className='w-full h-20 flex flex-row border-b px-3'>
      <div className='flex-1 flex items-center'>
        <button onClick={() => Util.menuLeft.show()}>SHOP</button>
      </div>
      <div className='flex-[1] center'>
        <Link to='/'>
          <h1 className='text-4xl font-bold p-4'>LIBÉ</h1>
        </Link>
      </div>
      <div className='flex-1 flex items-center justify-end'>
        <ToggleTheme />
        <div className='h-11 flex flex-row items-center w-0 md:w-[128px] transition-all overflow-hidden gap-1 duration-500'>
          <button
            className='w-10 h-10 rounded-full center transition-all hover:bg-gray-80 hover:dark:bg-gray-750 active:scale-95 text-main'
            onClick={() => Util.searchRight.show()}>
            <IconSearch />
          </button>
          <button className='w-10 h-10 rounded-full center transition-all hover:bg-gray-80 hover:dark:bg-gray-750 active:scale-95 text-main'
            onClick={() => Util.cartRight.show()}>
            <IconCart />
          </button>
          <ButtonUser />
        </div>
        <GroupButtonMobile />
      </div>
    </header>
  )
}

const ButtonUser = () => {

  return (
    <Link className='w-10 h-10 rounded-full center transition-all hover:bg-gray-80 hover:dark:bg-gray-750 active:scale-95 text-main' to='/login'>
      <IconUser />
    </Link>
  )
}

const GroupButtonMobile = () => {

  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) setShow(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)

  }, [menuRef])

  return (
    <div className='relative ml-1 md:ml-0'>
      <button
        className={twMerge(
          'w-10 h-10 rounded-full center hover:bg-gray-80 hover:dark:bg-gray-750 text-main md:w-0 transition-all duration-500',
          show && 'bg-gray-80 dark:bg-gray-750',
          !show && 'active:scale-95'
        )}
        onClick={() => setShow(!show)}
        ref={buttonRef}>
        <IconThreeLine />
      </button>
      <div
        className={twMerge(
          'absolute z-[10] top-11 -right-1 p-1 w-40 flex flex-col bg-main shadow rounded border border-main transition origin-top-right duration-',
          show ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        )}
        ref={menuRef}>
        <button
          className='h-8 px-1 flex gap-2 flex-row items-center hover:bg-gray-80 hover:dark:bg-gray-750 rounded'
          onClick={() => {
            setShow(false)
            Util.searchRight.show()
          }}>
          <IconSearch />
          <span>{t('Search')}</span>
        </button>
        <button
          className='h-8 px-1 flex gap-2 flex-row items-center hover:bg-gray-80 hover:dark:bg-gray-750 rounded'
          onClick={() => {
            setShow(false)
            Util.cartRight.show()
          }}>
          <IconCart />
          <span>{t('Cart')}</span>
        </button>
        <button className='h-8 px-1 flex gap-2 flex-row items-center hover:bg-gray-80 hover:dark:bg-gray-750 rounded' >
          <IconUser />
          <span>{t('Search')}</span>
        </button>
      </div>
    </div>
  )
}