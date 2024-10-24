import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { useTranslation } from 'react-i18next'
import { IconBars, IconCollection, IconProduct, IconShop, IconUser, IconWarehouse } from './Icon'
import { memo, useState } from 'react'
import ButtonIconRounded from './ButtonIconRounded'
import Utils from '@utils'
import { useDebounce } from '@hooks'

const AdminNavbar = () => {

  const [show, setShow] = useState(true)

  Utils.GlobalComponent.AdminNavbar = {
    isShow: show,
    show: () => {
      setShow(true)
    },
    hide: () => {
      setShow(true)
    },
    click: () => {
      setShow(show => !show)
    }
  }

  return (
    <nav className='h-full text-xs bg-secondary'>
      <div className={twMerge(
        'w-0 overflow-hidden transition-all',
        show ? 'md:w-60' : 'md:w-0'
      )}>
        <div className='w-60'>
          <AdminNavbarContent />
        </div>
      </div>
    </nav>
  )
}

const AdminNavbarMobile = () => {

  const [show, setShow] = useState(false)

  Utils.GlobalComponent.AdminNavbarMobile = {
    show: () => {
      setShow(true)
    },
    hide: () => {
      setShow(true)
    }
  }

  const _show = useDebounce(show, show ? 0 : 400)
  const __show = useDebounce(show, show ? 100 : 0)

  return (
    _show ? (
      <div>
        {__show && (
          <div
            className='fixed z-5 top-0 left-0 right-0 bottom-0 bg-black/50'
            onClick={() => setShow(false)}></div>
        )}
        <div className={twMerge(
          'fixed z-6 w-60 top-0 left-0 bottom-0 px-1',
          'bg-primary text-primary origin-left transition-transform duration-300',
          __show ? 'translate-x-0' : '-translate-x-full'
        )}>
          <div className='h-14 px-3 flex flex-row items-center gap-2'>
            <ButtonIconRounded
              onClick={() => setShow(false)}
              icon={<IconBars className='w-5 h-5' />} />
            <Link to='/admin'>
              <h1 className='font-bold text-3xl'>LIBÉ</h1>
            </Link>
          </div>
          <AdminNavbarContent className='h-[calc(100%-56px)]' />
        </div>
      </div>
    ) : (
      <></>
    )
  )
}

const AdminNavbarContent = memo(({ className }: { className?: string }) => {

  const { pathname } = useLocation()
  const { t } = useTranslation()

  const items = [
    { title: t('Manager').toUpperCase(), path: '*', type: 'text' },
    { title: t('CollectionManager'), icon: <IconCollection />, path: '/admin/collection' },
    { title: t('ProductManager'), icon: <IconProduct />, path: '/admin/product' },
    { title: t('StoreManager'), icon: <IconShop />, path: '/admin/store' },
    { title: t('UserManager'), icon: <IconUser />, path: '/admin/user' },
    { title: t('WarehouseManager'), icon: <IconWarehouse />, path: '/admin/warehouse' },
    { title: 'Thiết lập'.toUpperCase(), path: '*', type: 'text' },
  ]

  return (
    <div className={twMerge(
      'w-full h-[calc(100%-56px)] px-2',
      'text-xs font-medium overflow-y-auto no-scrollbar',
      className
    )}>
      {items.map(({ title, icon, path, type }, index) => (
        <NavbarItem
          key={index}
          title={title}
          icon={icon}
          path={path}
          type={type}
          active={pathname == path} />
      ))}
    </div>
  )
})

const NavbarItem = (props: NavbarItemProps) => {

  const { title, icon, path = '*', active, type } = props

  if (type == 'text') {
    return (
      <div className='w-full h-7 px-2 flex flex-row items-center'>
        <span className='font-medium'>{title}</span>
      </div>
    )
  }

  return (
    <Link to={path} className={twMerge(
      'w-full h-10 mt-1 px-2',
      'flex flex-row items-center',
      'rounded-md transition-all',
      'hover:bg-rgb-230 dark:hover:bg-rgb-30',
      active && 'font-semibold bg-rgb-240 dark:bg-rgb-30'
    )}>
      <div className='size-6 mr-2 flex flex-row items-center'>
        {icon}
      </div>
      <span className=''>{title}</span>
    </Link>
  )
}

type NavbarItemProps = {
  title?: string,
  icon?: React.ReactNode,
  path: string,
  active?: boolean,
  type?: string
}

export default AdminNavbar

export { AdminNavbarMobile }