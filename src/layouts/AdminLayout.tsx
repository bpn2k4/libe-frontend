import Container from './Container'
import AdminNavbar from '@components/AdminNavbar'
import AdminHeader from '@components/AdminHeader'

const AdminLayout = (props: AdminLayoutProps) => {

  const { children } = props

  return (
    <Container className='overflow-y-hidden overflow-x-hidden'>
      <AdminHeader />
      <div className='w-full h-[calc(100%-56px)] flex flex-row relative text-xs'>
        <AdminNavbar />
        <div className='flex-1 relative'>
          <div className='absolute top-0 right-0 left-0 bottom-0 overflow-y-auto'>
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