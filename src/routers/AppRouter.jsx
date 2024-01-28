import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShopLayout } from '~/layouts'
import { Collection, Home, Login, Product, Register, Search, Test } from '~/pages'

const routes = [
  {
    path: '/',
    element: (
      <ShopLayout>
        <Home />
      </ShopLayout>
    )
  },
  {
    path: '/login',
    element: (
      <ShopLayout>
        <Login />
      </ShopLayout>
    )
  },
  {
    path: '/register',
    element: (
      <ShopLayout>
        <Register />
      </ShopLayout>
    )
  },
  {
    path: '/collection',
    element: (
      <ShopLayout>
        <Collection />
      </ShopLayout>
    )
  },
  {
    path: '/product',
    element: (
      <ShopLayout>
        <Product />
      </ShopLayout>
    )
  },
  {
    path: '/search',
    element: (
      <ShopLayout>
        <Search />
      </ShopLayout>
    )
  },
  {
    path: '/test',
    element: (
      <ShopLayout>
        <Test />
      </ShopLayout>
    )
  },
]

const AppRouter = ({ children }) => {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      {children}
    </BrowserRouter>
  )
}

export default AppRouter