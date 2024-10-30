import { useTranslation } from 'react-i18next'

import Breadcrumb from '@components/Breadcrumb'


const Collection = () => {

  const { t } = useTranslation()

  const breadcrumbItems = [
    { name: t('Home'), path: '/' },
    { name: t('Collection'), path: '/collections' }
  ]

  return (
    <div className='w-full'>
      <Breadcrumb items={breadcrumbItems} />
      Collection
    </div>
  )
}

export default Collection