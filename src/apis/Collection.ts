import { ApiStatus } from '@types'
import base from './base'

type GetCollectionsParams = {
  q?: string,
  page: number,
  limit: number,
  sortByCreatedAt?: boolean
  sortByName?: boolean
}
type GetCollectionsResponse = {
  status: ApiStatus,
}
type GetCollections = (params: GetCollectionsParams) => Promise<GetCollectionsResponse>
export const getCollection: GetCollections = (params) => {
  const url = '/collections'
  return base.get(url, { params })
}
