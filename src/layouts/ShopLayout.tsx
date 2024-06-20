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
      <div className='w-full py-2 text-center'>Power by GPT-4o</div>
    </Container>
  )
}

export default ShopLayout

type ShopLayoutProps = {
  children?: React.ReactNode
}