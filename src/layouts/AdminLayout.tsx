import AdminNavbar from '@components/AdminNavbar'
import Container from './Container'

const AdminLayout = (props: AdminLayoutProps) => {

  const { children } = props

  return (
    <Container className='flex flex-row overflow-y-hidden overflow-x-hidden'>
      <AdminNavbar />
      {children}
    </Container>
  )
}

export default AdminLayout

type AdminLayoutProps = {
  children?: React.ReactNode
}