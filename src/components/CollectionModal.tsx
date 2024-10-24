import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from './Modal'
import ButtonIconRounded from './ButtonIconRounded'
import { IconCancel } from './Icon'
import TextField from './TextField'
import { twMerge } from 'tailwind-merge'
import Utils from '@utils'

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

  const [show, setShow] = useState(true)
  const [config, setConfig] = useState({ ...defaultModalConfig })

  Utils.GlobalComponent.CollectionModal = {
    isShow: show,
    show: () => {
      setShow(true)
    },
    hide: () => {
      setShow(false)
    }
  }

  return (
    <Modal
      show={show}
      className='max-w-[600px] flex flex-col text-xs'
      onClickOutsize={() => setShow(false)}>

      <Modal.Header onClickButtonClose={() => setShow(false)}>
        <span>
          {t('Collection')}
        </span>
      </Modal.Header>

      <Modal.Body className='px-3 py-4'>
        <TextField
          label='Name' />
        <TextField
          label='Slug' />
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
      </Modal.Body>

      <Modal.Footer>
        <button className='flex-1 h-9 rounded-md border border-primary' onClick={() => setShow(false)}>
          Cancel
        </button>
        <button className='flex-1 h-9 rounded-md border border-primary'>
          Save
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default CollectionModal