import { NavBar, AdminHeader } from '~/components'
import { Container } from './Container'
import { } from '~/components'

export const AdminLayout = ({ children }) => {

  return (
    <Container>

      <div className='w-full flex flex-row'>
        <NavBar />
        <div className='w-full'>
          <AdminHeader />
          {children}
        </div>
      </div>
    </Container>
  )
}

