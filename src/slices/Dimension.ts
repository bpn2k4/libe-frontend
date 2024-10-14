import { createSlice } from '@reduxjs/toolkit'

const initialState: DimensionState = {
  windowWidth: 1024,
  windowHeight: 800,
}

const dimensionSlice = createSlice({
  name: 'DimensionSlice',
  initialState: initialState,
  reducers: {
    setWindowWidth: (state, { payload }) => {
      state.windowWidth = payload
    },
    setWindowHeight: (state, { payload }) => {
      state.windowHeight = payload
    },
  },
})

const dimensionReducer = dimensionSlice.reducer
export default dimensionReducer
export const { setWindowWidth, setWindowHeight } = dimensionSlice.actions

/** 
 * Type definition for the dimension state.
 * @property {number} windowWidth - The current window width.
 * @property {number} windowHeight - The current window height.
 */
type DimensionState = {
  windowWidth: number,
  windowHeight: number,
}