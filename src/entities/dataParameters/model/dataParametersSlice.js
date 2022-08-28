import { createSlice } from '@reduxjs/toolkit'

import {discretOptions, timeFrameOptions} from '../../../shared/timeConstants'


export const dataParametersSlice = createSlice({
    name: 'dataParameters',
    initialState: {
        discreteness: discretOptions.HOUR,
        timeFrame: timeFrameOptions.ONE_DAY
    },
    reducers: {
        setDiscreteness: (state, action) => {
            state.discreteness = action.payload
        },
        setTimeFrame: (state, action) => {
            state.timeFrame = action.payload
        },
    }
})

export const { setDiscreteness, setTimeFrame } = dataParametersSlice.actions

export default dataParametersSlice.reducer
