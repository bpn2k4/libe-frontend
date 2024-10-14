import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from './Modal'
import ButtonIconRounded from './ButtonIconRounded'
import { IconCancel } from './Icon'
import TextField from './TextField'
import { twMerge } from 'tailwind-merge'

type CollectionModalConfig = {
  type: 'view' | 'create',
  collection: {
    name: string,
    description: string,
  }
}

const defaultModalConfig: CollectionModalConfig = {
  type: 'view',
  collection: {
    name: '',
    description: '',
  },
}

const CollectionModal = () => {

  const { t } = useTranslation()

  const [show, setShow] = useState(false)
  const [config, setConfig] = useState({ ...defaultModalConfig })

  return (
    <Modal
      show={show}
      className='max-w-[600px] flex flex-col text-xs'
      onClickOutsize={() => setShow(false)}>
      <div className='relative border-b'>
        <div className='h-10 flex items-center justify-center font-semibold'>
          {t('Collection')}
        </div>
        <ButtonIconRounded
          icon={<IconCancel />}
          className='size-8 absolute top-1 right-1'
          onClick={() => setShow(false)} />
      </div>

      <div className='flex-1 px-3 overflow-y-auto'>
        <TextField
          label='Name' />
        <TextField
          textarea
          label='Description'
          value={config.collection.description}
          cx={{ input: 'h-[100px]' }}
          onChange={e => {
            config.collection.description = e.target.value
            setConfig({ ...config })
          }}
        />
      </div>

      <div className='border-t'>
        <div className={twMerge(
          'h-11 px-4',
          'flex flex-row items-center justify-center gap-4',
          'text-rgb-255 font-medium'
        )}>
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

export default CollectionModal