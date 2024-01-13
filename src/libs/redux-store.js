import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from '~/slices';

const reducer = {
  home: homeReducer
}

const store = configureStore({
  reducer: reducer,
  enhancers: getDefaultEnhancer => [...getDefaultEnhancer()],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export { store }