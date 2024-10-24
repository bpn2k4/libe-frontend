import { createSlice } from '@reduxjs/toolkit'
import { Collection } from '@types'

type CollectionManagerState = {
  page: number,
  total: number,
  limit: number,
  search: string,
  collections: Collection[],
}

const initialState: CollectionManagerState = {
  page: 0,
  total: 12,
  limit: 5,
  search: '',
  collections: [],
}

const collectionManagerSlice = createSlice({
  initialState: initialState,
  name: 'CollectionManagerSlice',
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload
    },
    setTotal: (state, { payload }) => {
      state.total = payload
    },
    setLimit: (state, { payload }) => {
      state.limit = payload
    },
    setSearch: (state, { payload }) => {
      state.search = payload
    },
    setCollections: (state, { payload }) => {
      state.collections = payload
    }
  }
})

const collectionManagerReducer = collectionManagerSlice.reducer
export default collectionManagerReducer
export const { setPage, setTotal, setLimit, setSearch, setCollections } = collectionManagerSlice.actions
