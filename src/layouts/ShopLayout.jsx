import { ShopHeader } from '~/components'
import { Container } from './Container'

export const ShopLayout = ({ children }) => {

  return (
    <Container>
      <div className='w-full'>
        <ShopHeader />
        {children}
      </div>
    </Container>
  )
}

