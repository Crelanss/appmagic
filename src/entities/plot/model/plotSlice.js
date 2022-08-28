import { createSlice } from '@reduxjs/toolkit'


export const plotSlice = createSlice({
    name: 'plot',
    initialState: {
        value: []
    },
    reducers: {
        setPoints: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { setPoints } = plotSlice.actions

export default plotSlice.reducer
