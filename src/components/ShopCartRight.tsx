import { twMerge, useState } from '@hooks'
import Utils from '@utils'
import ButtonIconRounded from './ButtonIconRounded'
import { IconCancel } from './Icon'

const ShopCartRight = () => {

  const [show, setShow] = useState(true)

  Utils.GlobalComponent.ShopCartRight = {
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
          'absolute offset-0 pl-8 pr-4 py-4 flex flex-col'
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
  )
}

const CardItem = (props: CardItemProps) => {

  const { } = props

  return (
    <div className='w-full py-3 bg-yellow-400 flex flex-row'>
    </div>
  )
}

type CardItemProps = {

}

export default ShopCartRight