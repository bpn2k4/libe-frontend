import { useDispatch as useDispatchRedux, useSelector as useSelectorRedux } from 'react-redux'

import type { AppDispatch, AppState } from '@libs/redux-store'
import useDebounce from './useDebounce'

const useSelector = useSelectorRedux.withTypes<AppState>()
const useDispatch = useDispatchRedux.withTypes<AppDispatch>()

/** A hook to select system state from the Redux store. */
const useSystemSelector = () => useSelector(state => state.system)
const useCollectionManagerSelector = () => useSelector(state => state.collectionManager)

export {
  useDebounce,
  useSelector,
  useDispatch,
  useSystemSelector,
  useCollectionManagerSelector
}
