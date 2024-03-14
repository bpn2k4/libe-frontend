import base from "./base"

const Collection = {
  createCollection: (data) => {
    const url = `/collection`
    return base.post(url, data)
  },
  getProductInCollection: (collectionId) => {
    const url = `/collection/${collectionId}/products`
    return base.get(url)
  },
  updateCollection: (data) => {
    const url = `/collection`
    return base.patch(url, data)
  },
  deleteCollection: (data) => {
    const url = `/collection`
    return base.delete(url, { data: data })
  },
  getOneCollection: (data) => {
    const url = `/collection`
    return base.get(url, { params: data })
  }
}

export default Collection