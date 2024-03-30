import { STATUS } from '~/configs'

import Auth from './Auth'
import Collection from './Collection'

const Api = {
  Auth,
  Collection,

  ...STATUS
}

export default Api