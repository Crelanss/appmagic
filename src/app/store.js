import {configureStore} from '@reduxjs/toolkit'

import dataParametersReducer from '../entities/dataParameters/model/dataParametersSlice'
import plotReducer from '../entities/plot/model/plotSlice'


export default configureStore({
    reducer: {
        dataParameters: dataParametersReducer,
        plot: plotReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['plot/setPoints'],
                ignoredPaths: ['plot.value'],
            },
        }),
})
