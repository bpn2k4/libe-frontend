import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-4 bg-secondary text-secondary'>
      <span className='text-8xl tracking-[.5rem] font-bold'>404</span>
      <span className='text-3xl'>{t("PageNotFound")}</span>
      <span>{t("PageNotFoundDescription")}</span>
      <Link to={'/'} className='px-8 py-4 border border-primary rounded-full hover:opacity-70'>{t('Home')}</Link>
    </div>
  )
}

export default NotFound