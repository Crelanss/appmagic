import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {discretOptions, timeFrameOptions} from '../../shared/timeConstants'
import DataParametersGroup from '../../entities/dataParameters/DataParametersGroup'
import {setDiscreteness, setTimeFrame} from '../../entities/dataParameters/model/dataParametersSlice'


const Discreteness = () => {
    const discreteness = useSelector(state => state.dataParameters.discreteness)
    const dispatch = useDispatch()

    const click = (value) => {
        dispatch(setDiscreteness(value))

        switch (value) {
            case discretOptions.HOUR:
                dispatch(setTimeFrame(timeFrameOptions.ONE_WEEK))
                break
            case discretOptions.DAY:
                dispatch(setTimeFrame(timeFrameOptions.THREE_MONTHS))
                break
            case discretOptions.WEEK:
                dispatch(setTimeFrame(timeFrameOptions.MAX))
                break
            default:
                return 0
        }
    }

    return (
        <>
            <DataParametersGroup optionsList={discretOptions}
                                 value={discreteness}
                                 click={click}
            />
        </>
    )
}

export default Discreteness
