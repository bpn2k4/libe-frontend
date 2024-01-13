import { createSlice } from '@reduxjs/toolkit'


const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: {}
})

export const homeReducer = homeSlice.reducer
export const { } = homeSlice.actions