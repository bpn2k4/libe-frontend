import Container from './Container'
import AdminNavbar from '@components/AdminNavbar'
import AdminHeader from '@components/AdminHeader'

const AdminLayout = (props: AdminLayoutProps) => {

  const { children } = props

  return (
    <Container className='overflow-y-hidden overflow-x-hidden'>
      <AdminHeader />
      <div className='w-full h-full flex flex-row relative text-xs'>
        <AdminNavbar />
        <div className='flex-1 overflow-y-auto relative'>
          <div className='absolute top-0 right-0 left-0 bottom-0'>
            {children}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AdminLayout

type AdminLayoutProps = {
  children?: React.ReactNode
}