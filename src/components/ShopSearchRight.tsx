import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import Utils from '@utils'

import ButtonIconRounded from './ButtonIconRounded'
import { IconCancel } from './Icon'
import { useDebounce } from '@hooks'

const ShopSearchRight = () => {

  const [show, setShow] = useState(false)

  Utils.GlobalComponent.ShopSearchRight = {
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
        {show && <div className='fixed z-5 top-0 left-0 right-0 bottom-0 bg-black/50' onClick={() => setShow(false)} />}
        <div className={twMerge(
          'fixed z-6 top-0 right-0 bottom-0 w-full md:max-w-[400px]',
          'bg-primary text-primary font-semibold origin-right transition-transform duration-300',
          __show ? 'translate-x-0' : 'translate-x-full'
        )}>
          <div className={twMerge(
            'absolute top-0 left-0 right-0 bottom-0 overflow-y-auto no-scrollbar pl-8 pr-4 pt-4'
          )}>
            <div className='flex justify-end'>
              <ButtonIconRounded
                icon={<IconCancel />}
                className=''
                onClick={() => setShow(false)} />
            </div>
          </div>
        </div>
      </div>
    ) : (<></>)
  )
}

export default ShopSearchRight