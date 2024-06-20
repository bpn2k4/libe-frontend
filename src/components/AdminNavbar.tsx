import { Link } from 'react-router-dom'

import logo from '@assets/images/logo1.png'


const AdminNavbar = () => {

  return (
    <nav className='w-60 h-full'>
      <div className='w-full h-20 center'>
        <Link to='/dashboard' className='flex flex-row items-center'>
          {/* <img
            className='w-10 h-10'
            src={logo} /> */}
          <h1 className='text-4xl font-bold'>LIBÉ</h1>
        </Link>
      </div>
      <AdminNavbarContent />
    </nav>
  )
}

const AdminNavbarContent = () => {

  return (
    <div className='w-full h-full'>
      hello
    </div>
  )
}

export default AdminNavbar