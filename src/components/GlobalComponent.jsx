import { Toast } from './Toast'
import { MenuLeft } from './MenuLeft'
import { Splash } from './Splash'
import { CartRight } from './CartRight'
import { SearchRight } from './SearchRight'

export const GlobalComponent = () => {
  return (
    <>
      <Splash />
      <MenuLeft />
      <CartRight />
      <SearchRight />
      {/* <Toast /> */}
    </>
  )
}