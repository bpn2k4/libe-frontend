import { Toast } from './Toast'
import { MenuLeft } from './MenuLeft'
import { Splash } from './Splash'

export const GlobalComponent = () => {
  return (
    <>
      <Splash />
      <MenuLeft />
      <Toast />
    </>
  )
}