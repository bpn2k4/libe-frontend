import base from "./base"

/**@type {import("~/types").CollectionApi} */
const Collection = {
  createCollection: (data) => {
    const url = `/collection`
    return base.post(url, data)
  },
  getProductInCollection: (collectionId) => {
    const url = `/collection/${collectionId}/products`
    return base.get(url)
  },
  updateCollection: (collectionId, data) => {
    const url = `/collection/${collectionId}`
    return base.patch(url, data)
  },
  deleteCollection: (data) => {
    const url = `/collection`
    return base.delete(url, { data: data })
  },
  getOneCollection: (params) => {
    const url = `/collection`
    return base.get(url, { params: params })
  },
  getListCollection: (params) => {
    const url = `/collection`
    return base.get(url, { params: params })
  }
}

export default Collection