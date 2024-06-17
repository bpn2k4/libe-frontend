import { configureStore } from '@reduxjs/toolkit'

import systemReducer from '@slices/System'

const reducer = {
  system: systemReducer,
}

const store = configureStore({
  reducer: reducer,
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch