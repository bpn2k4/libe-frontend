import { NavBar, AdminHeader } from '~/components'
import { Container } from './Container'
import { } from '~/components'

export const AdminLayout = ({ children }) => {

  return (
    <Container>
      <div className='w-full flex flex-row h-screen overflow-hidden relative'>
        <NavBar />
        <div className='w-full h-full'>
          <div className='w-full z-[4] absolute bg-main'>
            <AdminHeader />
          </div>
          <div className='w-full h-full mt-14 overflow-y-auto overflow-x-hidden'>
            {children}
          </div>
        </div>
      </div>
    </Container>
  )
}

