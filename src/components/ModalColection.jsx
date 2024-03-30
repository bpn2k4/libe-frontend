import { useId, useState } from 'react'
import { Modal } from './Modal'
import { ButtonCancelCircle } from './ButtonCancelCircle'
import Util from '~/utils'
import { ACTION_TYPE } from '~/configs'
import { GroupButtonModal } from './GroupButtonModal'
import { TextField } from '.'
import { AreaField } from './AreaField'
import { SearchField } from './SearchField'
import { twMerge } from 'tailwind-merge'

const defaultConfig = {
  type: ACTION_TYPE.CREATE,

}


export const ModalCollection = () => {

  const [show, setShow] = useState(false)
  const [config, setConfig] = useState({ ...defaultConfig })

  Util.modalCollection = {
    isShow: show,
    show: (newConfig = {}) => {
      setConfig({ ...config, ...newConfig })
      setShow(true)
    },
    hide: () => {
      setShow(false)
    }
  }

  const [name, setName] = useState('')
  const [des, setDes] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [color, setColor] = useState('#ffffff')
  const id = useId()

  return (
    <Modal
      show={show}
      onClickOutsize={() => setShow(false)}>
      <div className='z-[2] w-full max-w-[500px] min-h-[200px] max-h-[calc(100vh-40px)] overflow-hidden flex flex-col bg-modal text-primary relative p-1 rounded-md'>
        <ButtonCancelCircle
          className='absolute top-2 right-2'
          onClick={() => setShow(!show)} />

        <div className='w-full text-center py-2 font-semibold text-xl'>
          Collection
        </div>
        <div className='flex-1 p-1 mt-2 overflow-y-auto'>
          <TextField
            label={'Collection name'}
            value={name}
            className='mt-1'
            cx={{ label: 'bg-modal' }}
            onChange={e => setName(e.target.value)} />
          <AreaField
            className='mt-5'
            label={'Collection description'}
            value={des}
            cx={{ label: 'bg-modal' }}
            onChange={e => setDes(e.target.value)} />
          <div className='flex flex-row mt-3 group'>
            <span>Color:</span>
            <label htmlFor={id} className={twMerge(
              'h-10 w-20 ml-2 border border-primary rounded cursor-pointer focus-within:ring-[0.5px] hover:ring-[0.5px] group-focus-within:ring-[0.5px] group-hover:ring-[0.5px]',
              'hover:border-rgb-190 dark:hover:border-rgb-70',
              'hover:ring-rgb-190 dark:hover:ring-rgb-70',
              'focus-within:border-rgb-190 dark:focus-within:border-rgb-70',
              'focus-within:ring-base-190 dark:focus-within:ring-rgb-70',
              'group-hover:border-rgb-190 dark:group-hover:border-rgb-70',
              'group-hover:ring-rgb-190 dark:group-hover:ring-rgb-70',
              'group-focus-within:border-rgb-190 dark:group-focus-within:border-rgb-70',
              'group-focus-within:ring-base-190 dark:group-focus-within:ring-rgb-70',
            )} style={{ backgroundColor: color }}></label>
            <input
              id={id}
              type='color'
              onChange={e => setColor(e.target.value)}
              className='size-0 overflow-hidden cursor-pointer' />
          </div>
          <div className='w-full h-[800px] mt-2'>
            <span className='text-sm'>Product list:</span>
            {/* <SearchField
              className='mt-1'
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              showIconClear={searchValue.length > 0}
              onClickButtonClear={() => setSearchValue('')}
              isLoading={true}
              placeHolder='Enter something' /> */}
          </div>
        </div>
        <GroupButtonModal />
      </div>
    </Modal>
  )
}