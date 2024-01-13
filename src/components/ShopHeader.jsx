import { Link } from 'react-router-dom'
import { ToggleTheme } from './ToggleTheme'
import Util from '~/utils'

export const ShopHeader = () => {

  return (
    <header className='w-full h-20 flex flex-row border-b px-3'>
      <div className='flex-1 flex items-center'>
        <button onClick={() => Util.menuLeft.show()}>SHOP</button>
      </div>
      <div className='flex-[3] center'>
        <Link>
          <h1 className='text-3xl font-bold p-4'>LIBÉ</h1>
        </Link>
      </div>
      <div className='flex-1 flex items-center justify-end'>
        <ToggleTheme />
      </div>
    </header>
  )
}