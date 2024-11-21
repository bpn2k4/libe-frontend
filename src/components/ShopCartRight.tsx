import { twMerge } from 'tailwind-merge'
import { useState } from 'react'

import Utils from '@utils'

import ButtonIconRounded from './ButtonIconRounded'
import { IconCancel } from './Icon'
import { useDebounce } from '@hooks'

const ShopCartRight = () => {

  const [show, setShow] = useState(false)

  Utils.GlobalComponent.ShopCartRight = {
    isShow: show,
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
        {show && (
          <div className='fixed z-5 top-0 left-0 right-0 bottom-0 bg-black/50' onClick={() => setShow(false)} />
        )}
        <div className={twMerge(
          'fixed z-6 top-0 right-0 bottom-0 w-full md:max-w-100',
          'bg-primary text-primary font-semibold origin-right transition-transform duration-300',
          __show ? 'translate-x-0' : 'translate-x-full'
        )}>
          <div className={twMerge(
            'absolute top-0 left-0 right-0 bottom-0 pl-8 pr-4 py-4 flex flex-col'
          )}>
            <div className='flex justify-end'>
              <ButtonIconRounded
                icon={<IconCancel />}
                className=''
                onClick={() => setShow(false)} />
            </div>
            <div className='flex-1 overflow-y-auto'>
              <CardItem />
            </div>
            <div className='center'>
              <button className='px-12 py-2 border rounded'>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    ) : (<></>)
  )
}

const CardItem = (props: CardItemProps) => {

  const { className } = props

  return (
    <div className={twMerge('w-full py-3 bg-yellow-400 flex flex-row', className)}>
    </div>
  )
}

type CardItemProps = {
  className?: string
}

export default ShopCartRight