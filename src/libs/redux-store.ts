import { configureStore } from '@reduxjs/toolkit'

import systemReducer from '@slices/System'
import collectionManagerReducer from '@slices/CollectionManager'

const reducer = {
  system: systemReducer,
  collectionManager: collectionManagerReducer
}

const store = configureStore({
  reducer: reducer,
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch