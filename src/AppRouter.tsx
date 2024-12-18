import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import ShopLayout from '@layouts/ShopLayout'
import AdminLayout from '@layouts/AdminLayout'
import CollectionManager from '@pages/CollectionManager'
import ProductManager from '@pages/ProductManager'
import StoreManager from '@pages/StoreManager'
import UserManager from '@pages/UserManager'
import NotFound from '@pages/NotFound'
import CollectionDetail from '@pages/CollectionDetail'
import Collection from '@pages/Collection'
import ProductDetail from '@pages/ProductDetail'

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
    path: '/collections',
    element: (
      <ShopLayout>
        <Suspense>
          <Collection />
        </Suspense>
      </ShopLayout>
    )
  },
  {
    path: '/collections/*',
    element: (
      <ShopLayout>
        <Suspense>
          <CollectionDetail />
        </Suspense>
      </ShopLayout>
    )
  },
  {
    path: '/products',
    element: (
      <ShopLayout>
        <Suspense>
          <Product />
        </Suspense>
      </ShopLayout>
    )
  },
  {
    path: '/products/*',
    element: (
      <ShopLayout>
        <Suspense>
          <ProductDetail />
        </Suspense>
      </ShopLayout>
    )
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
  {
    path: '/admin',
    element: (
      <AdminLayout>
        <Suspense>
          <Dashboard />
        </Suspense>
      </AdminLayout>
    )
  },
  {
    path: '/admin/*',
    element: (
      <Navigate to="/admin" replace={true} />
    )
  },
  {
    path: '*',
    element: (
      <NotFound />
    )
  }
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