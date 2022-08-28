import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {discretOptions, timeFrameOptions} from '../../shared/timeConstants'
import DataParametersGroup from '../../entities/dataParameters/DataParametersGroup'
import {setDiscreteness, setTimeFrame} from '../../entities/dataParameters/model/dataParametersSlice'


const TimeFrame = () => {
    const frame = useSelector(state => state.dataParameters.timeFrame)
    const dispatch = useDispatch()

    const click = (value) => {
        dispatch(setTimeFrame(value))

        switch (value) {
            case timeFrameOptions.ONE_DAY:
                dispatch(setDiscreteness(discretOptions.HOUR))
                break
            case timeFrameOptions.ONE_WEEK:
                dispatch(setDiscreteness(discretOptions.HOUR))
                break
            case timeFrameOptions.ONE_MONTH:
                dispatch(setDiscreteness(discretOptions.DAY))
                break
            case timeFrameOptions.THREE_MONTHS:
                dispatch(setDiscreteness(discretOptions.DAY))
                break
            case timeFrameOptions.SIX_MONTHS:
                dispatch(setDiscreteness(discretOptions.WEEK))
                break
            case timeFrameOptions.MAX:
                dispatch(setDiscreteness(discretOptions.WEEK))
                break
            default:
                return 0
        }
    }

    return (
        <>
            <DataParametersGroup optionsList={timeFrameOptions}
                                 value={frame}
                                 click={click}
            />
        </>
    )
}

export default TimeFrame
