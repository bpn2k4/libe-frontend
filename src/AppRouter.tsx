import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = React.lazy(() => import('@pages/Home'))
const Product = React.lazy(() => import('@pages/Product'))

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/product',
    element: <Product />
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