import Container from './Container'
import ShopHeader from '@components/ShopHeader'
import ShopFooter from '@components/ShopFooter'

const ShopLayout = (props: ShopLayoutProps) => {

  const { children } = props

  return (
    <Container>
      <div className='w-full max-w-7xl mx-auto'>
        <ShopHeader />
        {children}
        <ShopFooter />
      </div>
      <div className='w-full py-2 text-center'>Power by GPT-4o</div>
    </Container>
  )
}

export default ShopLayout

type ShopLayoutProps = {
  children?: React.ReactNode
}