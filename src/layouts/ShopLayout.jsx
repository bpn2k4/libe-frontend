import { useLayoutEffect } from 'react'

import { Container } from './Container'
import { ShopFooter, ShopHeader } from '~/components'

export const ShopLayout = ({ children }) => {

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  return (
    <Container>
      <div className='w-full'>
        <ShopHeader />
        {children}
        <ShopFooter />
      </div>
    </Container>
  )
}

