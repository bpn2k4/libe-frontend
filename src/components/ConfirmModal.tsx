import { useState } from 'react'
import Modal from './Modal'
import ButtonIconRounded from './ButtonIconRounded'
import { IconCancel, IconCheck, IconTrashCan } from './Icon'

const defaultModalConfig = {

  title: 'Confirm',
  message: 'Are you sure?',
}

const ConfirmModal = () => {

  const [show, setShow] = useState(false)

  const [config, setConfig] = useState(defaultModalConfig)

  return (
    <Modal
      show={show}
      className='text-xs'
      onClickOutsize={() => setShow(false)}>

      <div className='relative border-b'>
        <div className='w-full h-10 flex items-center justify-center font-semibold'>
          {config.title}
        </div>
        <ButtonIconRounded
          className='absolute size-8 top-1 right-1'
          icon={<IconCancel />}
          onClick={() => setShow(false)} />
      </div>
      <div className='flex items-center justify-center py-5'>
        <div className='w-32 h-32 rounded-[32px] border-[10px] flex items-center justify-center'>
          <IconTrashCan className='w-16 h-16' />
        </div>
      </div>
      <div className='w-full flex items-center justify-center mb-5'>
        <span className='line-clamp-2'>
          {config.message}
        </span>
      </div>
      <div className='border-t'>
        <div className='h-11 px-4 flex flex-row items-center justify-center gap-4 text-rgb-255 font-medium'>
          <button className='flex-1 h-9 bg-red-400 rounded-md border'>
            Hủy
          </button>
          <button className='flex-1 h-9 bg-blue-400 rounded-md border'>

          </button>
        </div>
      </div>

    </Modal>
  )
}

export default ConfirmModal