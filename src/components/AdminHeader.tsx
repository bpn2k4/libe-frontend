import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import ToggleTheme from './ToggleTheme'
import ButtonIconRounded from './ButtonIconRounded'
import { IconBars } from './Icon'
import Utils from '@utils'

const AdminHeader = () => {

  return (
    <header className={twMerge(
      'w-full h-14 px-5',
      'flex flex-row items-center justify-between',
      'text-sm bg-secondary',
      'border-b-2 border-rgb-240 dark:border-rgb-20'
    )}>
      <div className='h-14 flex flex-row items-center'>
        <div className='w-10 h-10 overflow-hidden md:w-0'>
          <ButtonIconRounded
            onClick={() => Utils.GlobalComponent.AdminNavbarMobile.show()}
            icon={<IconBars className='w-5 h-5' />} />
        </div>
        <div className='w-0 h-10 overflow-hidden md:w-10'>
          <ButtonIconRounded
            onClick={() => Utils.GlobalComponent.AdminNavbar.click()}
            icon={<IconBars className='w-5 h-5' />} />
        </div>
        <Link className='ml-2' to='/admin'>
          <h1 className='font-bold text-3xl'>LIBÉ</h1>
        </Link>
      </div>
      <div>
        <ToggleTheme />
      </div>
    </header>
  )
}
export default AdminHeader