import { NavBar, AdminHeader } from '~/components'
import { Container } from './Container'
import { } from '~/components'
import { twMerge } from 'tailwind-merge'

export const AdminLayout = ({ children }) => {

  return (
    <Container>
      <div className='w-full h-screen overflow-hidden relative flex flex-row'>
        <div className=''>
          <NavBar />
        </div>
        <div className='flex-1 relative'>
          <div className='w-full z-[4] absolute bg-primary'>
            <AdminHeader />
          </div>
          <div className='absolute top-12 left-0 bottom-0 right-0 overflow-y-auto overflow-x-hidden'>
            {children}
          </div>
        </div>
      </div>
    </Container>
  )
}

