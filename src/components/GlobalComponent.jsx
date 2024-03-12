import { Toast } from './Toast'
import { MenuLeft } from './MenuLeft'
import { Splash } from './Splash'
import { CartRight } from './CartRight'
import { SearchRight } from './SearchRight'
import { ModalConfirm } from './ModalConfirm'

export const GlobalComponent = () => {
  return (
    <>
      <Splash />
      <MenuLeft />
      <CartRight />
      <SearchRight />
      <ModalConfirm />
      {/* <Toast /> */}
    </>
  )
}