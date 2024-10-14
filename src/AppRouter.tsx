import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ShopLayout from '@layouts/ShopLayout'
import AdminLayout from '@layouts/AdminLayout'
import CollectionManager from '@pages/CollectionManager'
import ProductManager from '@pages/ProductManager'
import StoreManager from '@pages/StoreManager'
import UserManager from '@pages/UserManager'

const Home = React.lazy(() => import('@pages/Home'))
const Product = React.lazy(() => import('@pages/Product'))
const Dashboard = React.lazy(() => import('@pages/Dashboard'))

const routes = [
  {
    path: '/',
    element: (
      <ShopLayout>
        <Suspense>
          <Home />
        </Suspense>
      </ShopLayout>
    )
  },
  {
    path: '/product',
    element: <Product />
  },
  {
    path: '/admin/collection',
    element: (
      <AdminLayout>
        <Suspense>
          <CollectionManager />
        </Suspense>
      </AdminLayout>
    )
  },
  {
    path: '/admin/product',
    element: (
      <AdminLayout>
        <Suspense>
          <ProductManager />
        </Suspense>
      </AdminLayout>
    )
  },
  {
    path: '/admin/store',
    element: (
      <AdminLayout>
        <Suspense>
          <StoreManager />
        </Suspense>
      </AdminLayout>
    )
  },
  {
    path: '/admin/user',
    element: (
      <AdminLayout>
        <Suspense>
          <UserManager />
        </Suspense>
      </AdminLayout>
    )
  },
]

const AppRouter = (props: AppRouterProps) => {
  const { children } = props

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route
            key={index}
            path={path}
            element={element} />
        ))}
      </Routes>
      {children}
    </BrowserRouter>
  )
}

type AppRouterProps = {
  children?: React.ReactNode
}

export default AppRouter