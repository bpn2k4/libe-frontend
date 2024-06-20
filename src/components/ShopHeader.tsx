import { Link } from 'react-router-dom'
import { useState, useEffect, twMerge, useTranslation, useRef } from '@hooks'
import ToggleTheme from './ToggleTheme'
import { IconCart, IconSearch, IconThreeLine, IconUser } from './Icon'
import ButtonIconRounded from './ButtonIconRounded'
import Utils from '@utils'


const ShopHeader = () => {

  return (
    <header className='w-full h-20 px-3 flex flex-row border-b relative'>
      <div className='absolute offset-0 center'>
        <Link to='/'>
          <h1 className='text-4xl font-bold p-4'>LIBÉ</h1>
        </Link>
      </div>
      <div className='z-1 center'>
        <button onClick={() => Utils.GlobalComponent.ShopMenuLeft.show()}>SHOP</button>
      </div>
      <div className='flex-1'></div>
      <div className='z-1'>
        <HeaderLeft />
      </div>
    </header >
  )
}

const HeaderLeft = () => {

  return (
    <div className='flex items-center h-full'>
      <ToggleTheme />
      <GroupButton />
      <GroupButtonMobile />
    </div>
  )
}

const GroupButton = () => {

  return (
    <div className='h-11 flex flex-row items-center w-0 md:w-[128px] transition-all overflow-hidden gap-1 duration-500'>
      <ButtonIconRounded
        icon={<IconSearch />}
        onClick={() => Utils.GlobalComponent.ShopSearchRight.show()} />
      <ButtonIconRounded
        icon={<IconCart />}
        onClick={() => Utils.GlobalComponent.ShopCartRight.show()} />
      <ButtonIconRounded
        icon={<IconUser />}
        link='/dashboard' />
    </div>
  )
}



const GroupButtonMobile = () => {

  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {

    const handleClickOutside = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node) && !buttonRef.current?.contains(e.target as Node)) setShow(false)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  return (
    <div className='relative ml-1 md:ml-0'>
      <button
        className={twMerge(
          'size-10 center rounded-full text-primary hover:bg-rgb-215 dark:hover:bg-rgb-60 transition-all duration-500 md:w-0',
          show && 'bg-rgb-215 dark:bg-rgb-60',
        )}
        onClick={() => setShow(!show)}
        ref={buttonRef}>
        <IconThreeLine />
      </button>
      <div
        className={twMerge(
          'absolute w-40 z-[10] top-11 -right-1 p-1 flex flex-col rounded bg-contrast shadow-primary transition-all origin-top-right',
          show ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        )}
        ref={menuRef}>
        <button
          className='h-9 px-1 flex gap-2 flex-row items-center rounded hover:bg-rgb-215 dark:hover:bg-rgb-60'
          onClick={() => {
            setShow(false)
            Utils.GlobalComponent.ShopSearchRight.show()
          }}>
          <IconSearch />
          <span>{t('Search')}</span>
        </button>
        <button
          className='h-9 px-1 flex gap-2 flex-row items-center rounded hover:bg-rgb-215 dark:hover:bg-rgb-60'
          onClick={() => {
            setShow(false)
            Utils.GlobalComponent.ShopCartRight.show()
          }}>
          <IconCart />
          <span>{t('Cart')}</span>
        </button>
        <button
          className='h-9 px-1 flex gap-2 flex-row items-center rounded hover:bg-rgb-215 dark:hover:bg-rgb-60' >
          <IconUser />
          <span>{t('User')}</span>
        </button>
      </div>
    </div>
  )
}

export default ShopHeader