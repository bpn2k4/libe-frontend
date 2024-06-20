import { twMerge, useState } from '@hooks'
import Utils from '@utils'
import ButtonIconRounded from './ButtonIconRounded'
import { IconCancel } from './Icon'

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

  return (
    <div>
      {show && <div className='fixed z-[10] offset-0 bg-black/50' onClick={() => setShow(false)} />}
      <div className={twMerge(
        'fixed z-[11] top-0 right-0 bottom-0 w-full md:max-w-[400px] bg-primary text-primary font-semibold origin-right transition-transform duration-300',
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
        </div>
      </div>
    </div>
  )
}

export default ShopSearchRight