import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Api from '~/apis'

const thunkGetListCollection = createAsyncThunk(
  "thunkGetListCollection",
  Api.Collection.getListCollection
)

const initialState = {
  isFetching: false,
  collections: [],
  total: 1,
  page: 0,
  limit: 10,
  error: null
}

const adminCollectionSlice = createSlice({
  name: 'adminCollectionSlice',
  initialState: initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload
    },
    setLimit: (state, { payload }) => {
      state.limit = payload
    },
    setCollections: (state, { payload }) => {
      state.collections = payload
    },
    clearAdminCollectionState: (_, __) => {
      return { ...initialState }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(thunkGetListCollection.pending, (state, _) => {
        state.isFetching = true
      })
      .addCase(thunkGetListCollection.fulfilled, (state, { payload }) => {
        state.isFetching = false
        if (payload.status = Api.SUCCESS) {
          state.total = payload.total
          state.collections = payload.collections.map(item => ({ ...item, isChecked: false }))
        }
      })
      .addCase(thunkGetListCollection.rejected, (state, { payload }) => {
        state.isFetching = false
      })
  }
})

export const adminCollectionReducer = adminCollectionSlice.reducer
export const { setPage, setLimit, setCollections } = adminCollectionSlice.actions
export { thunkGetListCollection }