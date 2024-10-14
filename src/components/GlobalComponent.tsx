import { "🍚" as AdminNavbarMobile } from './AdminNavbar'
import CollectionModal from './CollectionModal'
import ConfirmModal from './ConfirmModal'
import ShopCartRight from './ShopCartRight'
import ShopMenuLeft from './ShopMenuLeft'
import ShopSearchRight from './ShopSearchRight'


const GlobalComponent = () => {

  return (
    <>
      <ConfirmModal />
      <ShopCartRight />
      <ShopMenuLeft />
      <ShopSearchRight />
      <CollectionModal />
      <AdminNavbarMobile />
    </>
  )
}

export default GlobalComponent