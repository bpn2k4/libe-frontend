import Container from './Container'
import ShopHeader from '@components/ShopHeader'
import ShopFooter from '@components/ShopFooter'

const ShopLayout = (props: ShopLayoutProps) => {

  const { children } = props

  return (
    <Container>
      <ShopHeader />
      {children}
      <ShopFooter />
    </Container>
  )
}

export default ShopLayout

type ShopLayoutProps = {
  children?: React.ReactNode
}