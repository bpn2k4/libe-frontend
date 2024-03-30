import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from '~/slices';
import { adminCollectionReducer } from '~/slices/AdminCollection';

const reducer = {
  home: homeReducer,
  adminCollection: adminCollectionReducer,
}

const store = configureStore({
  reducer: reducer,
  enhancers: getDefaultEnhancer => [...getDefaultEnhancer()],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export { store }