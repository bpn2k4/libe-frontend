import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import Utils from '@utils'

import ButtonIconRounded from './ButtonIconRounded'
import { IconCancel, IconCaret } from './Icon'
import { useDebounce } from '@hooks'

const ShopMenuLeft = () => {

  const [show, setShow] = useState(false)

  const { pathname } = useLocation()

  Utils.GlobalComponent.ShopMenuLeft = {
    isShow: show,
    show: () => {
      setShow(true)
    },
    hide: () => {
      setShow(false)
    }
  }

  const collections: ButtonCollection[] = [
    {
      name: 'NEW IN',
      link: '/collections/new-in',
      items: []
    },
    {
      name: 'CHÀO MÙA HOA | TẾT COLLECTION',
      link: '/collections/tet-collection',
      items: []
    },
    {
      name: 'THONG DONG ĐÓN TẾT | EDITORIALS',
      link: '/collections/editorials',
      items: []
    },
    {
      name: 'LUCKY & RED-Y SPRING ARRIVALS',
      link: '/collections/spring-arrivals',
      items: []
    },
    {
      name: 'SALE',
      link: '/collections/sale',
      items: [
        { name: 'SALE TO 10%', link: '/collections/sale-10' },
        { name: 'SALE TO 30%', link: '/collections/sale-20' },
        { name: 'SALE TO 50%', link: '/collections/sale-30' },
      ]
    },
    {
      name: 'SHOP',
      link: '/collections',
      items: [
        { name: 'ALL', link: '/collections/all' },
        { name: 'TROUSERS', link: '/collections/trousers' },
        { name: 'SKIRTS & SHORTS', link: '/collections/skirts-shorts' },
        { name: 'DRESSES & JUMPSUITS', link: '/collections/dresses-jumpsuits' },
      ]
    },
    {
      name: 'DENIM WEAR',
      link: '/collections/denim-ware',
      items: []
    },
    {
      name: 'LIBÉ GOODS',
      link: '/collections/libe-goods',
      items: []
    },
  ]

  const _show = useDebounce(show, show ? 0 : 400)
  const __show = useDebounce(show, show ? 100 : 0)

  useEffect(() => {
    setShow(false)
  }, [pathname])

  return (
    _show ? (
      <div>
        {show && (
          <div className='fixed z-5 top-0 left-0 right-0 bottom-0 bg-black/50' onClick={() => setShow(false)} />
        )}
        <div className={twMerge(
          'fixed z-6 top-0 left-0 bottom-0 w-full md:max-w-[400px]',
          'bg-primary text-primary font-semibold origin-left transition-transform duration-300',
          __show ? 'translate-x-0' : '-translate-x-full'
        )}>
          <div className={twMerge(
            'absolute top-0 left-0 right-0 bottom-0 pl-8 pr-4 pt-4',
            'overflow-y-auto no-scrollbar'
          )}>
            <div className='flex justify-end'>
              <ButtonIconRounded
                icon={<IconCancel />}
                className=''
                onClick={() => setShow(false)} />
            </div>
            {collections.map(({ name, link, items }, index) => (
              <ButtonCollection
                key={index}
                name={name}
                link={link}
                items={items} />
            ))}
          </div>
        </div>
      </div>
    ) : (
      <></>
    )

  )
}

const ButtonCollection = (props: ButtonCollectionProps) => {

  const { name, link, items = [] } = props

  const [show, setShow] = useState(false)

  return (
    <div role='button' className='w-full flex flex-col'>
      {items.length == 0 ? (
        <Link
          to={link}
          className='block pl-2 leading-8 text-left rounded overflow-hidden hover:bg-rgb-215 hover:dark:bg-rgb-60 transition-all'>
          {name}
        </Link>
      ) : (
        <div className='flex flex-row items-center h-8'>
          <Link
            to={link}
            className='px-2 leading-8 rounded hover:bg-rgb-215 hover:dark:bg-rgb-60 flex-1'>
            {name}
          </Link>
          <button
            className={twMerge(
              'w-6 h-6 ml-1 flex items-center justify-center rounded-full hover:bg-rgb-215 hover:dark:bg-rgb-60 transition-transform',
              show ? '-rotate-90' : 'rotate-90'
            )}
            onClick={() => setShow(!show)}>
            <IconCaret />
          </button>
        </div>
      )}
      {items.map(({ name, link }, index) => (
        <Link
          key={index}
          to={link}
          className={twMerge(
            'block ml-6 pl-2 rounded overflow-hidden text-left hover:bg-rgb-215 hover:dark:bg-rgb-60 transition-all ',
            show ? 'leading-8' : 'leading-[0px]'
          )}>
          {name}
        </Link>
      ))}
    </div>
  )

}

type ButtonCollection = {
  name?: string,
  link: string,
  items?: ButtonCollection[]
}

type ButtonCollectionProps = ButtonCollection

export default ShopMenuLeft