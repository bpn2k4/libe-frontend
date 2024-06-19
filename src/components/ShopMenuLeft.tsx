import { useLayoutEffect, useState, twMerge } from '@hooks'
import ButtonIconRounded from './ButtonIconRounded'
import { IconCancel, IconCaret } from './Icon'
import Utils from '@utils'
import { Link } from 'react-router-dom'

const ShopMenuLeft = () => {

  const [show, setShow] = useState(false)

  Utils.GlobalComponent.ShopMenuLeft = {
    isShow: show,
    show: () => {
      setShow(true)
    },
    hide: () => {
      setShow(true)
    }
  }

  const collections: ButtonCollection[] = [
    {
      name: 'NEW IN',
      link: '/',
      items: []
    },
    {
      name: 'CHÀO MÙA HOA | TẾT COLLECTION',
      link: '/',
      items: []
    },
    {
      name: 'THONG DONG ĐÓN TẾT | EDITORIALS',
      link: '/',
      items: []
    },
    {
      name: 'LUCKY & RED-Y SPRING ARRIVALS',
      link: '/',
      items: []
    },
    {
      name: 'SALE',
      link: '/',
      items: [
        { name: 'SALE TO 10%', link: '/' },
        { name: 'SALE TO 20%', link: '/' },
        { name: 'SALE TO 30%', link: '/' },
      ]
    },
    {
      name: 'SHOP',
      link: '/',
      items: [
        { name: 'ALL', link: '/' },
        { name: 'TROUSERS', link: '/' },
        { name: 'SKIRTS & SHORTS', link: '/' },
        { name: 'DRESSES & JUMPSUITS', link: '/' },
      ]
    },
    {
      name: 'DENIM WEAR',
      link: '/',
      items: []
    },
    {
      name: 'LIBÉ GOODS',
      link: '/',
      items: []
    },
  ]

  return (
    <div>
      {show && <div className='fixed z-[10] offset-0 bg-black/50' onClick={() => setShow(false)} />}
      <div className={twMerge(
        'fixed z-[11] top-0 left-0 bottom-0 w-full md:max-w-[400px] bg-primary text-primary font-semibold origin-left transition-transform duration-300',
        show ? 'scale-x-100' : 'scale-x-0'
      )}>
        <div className={twMerge(
          'absolute offset-0 overflow-y-auto no-scrollbar pl-8 pr-4 pt-4'
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
  )
}

const ButtonCollection = (props: ButtonCollectionProps) => {

  const { name, link, items = [] } = props

  const [show, setShow] = useState(false)

  return (
    <div role='button' className='w-full flex flex-col'>
      {items.length == 0 ? (
        <Link className='block pl-2 leading-8 text-left rounded overflow-hidden hover:bg-rgb-215 hover:dark:bg-rgb-60 transition-all' to={link}>
          {name}
        </Link>
      ) : (
        <div className='flex flex-row items-center h-8'>
          <Link className='px-2 leading-8 rounded hover:bg-rgb-215 hover:dark:bg-rgb-60 flex-1' to={link}>
            {name}
          </Link>
          <button
            className={twMerge(
              'w-6 h-6 ml-1 center rounded-full hover:bg-rgb-215 hover:dark:bg-rgb-60 transition-transform',
              show ? 'rotate-0' : 'rotate-90'
            )}
            onClick={() => setShow(!show)}>
            <IconCaret />
          </button>
        </div>
      )}
      {items.map(({ name, link }, index) => (
        <Link
          key={index}
          className={twMerge(
            'block ml-6 pl-2 rounded overflow-hidden text-left hover:bg-rgb-215 hover:dark:bg-rgb-60 transition-all ',
            show ? 'leading-8' : 'leading-[0px]'
          )}
          to={link}>
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