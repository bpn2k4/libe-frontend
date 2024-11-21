import { useEffect, useState } from 'react'

import Modal from './Modal'
import { IconTrashCan } from './Icon'

const defaultModalConfig = {

  title: 'Confirm',
  message: 'Are you sure?',
}

const ConfirmModal = () => {

  const [show, setShow] = useState(false)

  const [config, setConfig] = useState(defaultModalConfig)

  useEffect(() => {
    if (!show) {
      setConfig({ ...defaultModalConfig })
    }
  }, [show])

  return (
    <Modal
      show={show}
      className='text-xs'
      onClickOutsize={() => setShow(false)}>

      <Modal.Header
        onClickButtonClose={() => setShow(false)}>
        <span>
          {config.title}
        </span>
      </Modal.Header>
      <div className='flex items-center justify-center py-5'>
        <div className='w-32 h-32 rounded-32 border-10 flex items-center justify-center'>
          <IconTrashCan className='w-16 h-16' />
        </div>
      </div>
      <div className='w-full flex items-center justify-center mb-5'>
        <span className='line-clamp-2'>
          {config.message}
        </span>
      </div>
      <Modal.Footer>
        <button className='flex-1 h-9 rounded-md border border-primary'>
          Hủy
        </button>
        <button className='flex-1 h-9 rounded-md border border-primary'>

        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmModal