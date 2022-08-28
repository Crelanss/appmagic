import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'

import Discreteness from '../../features/discreteness/Discreteness'
import Plot from '../../entities/plot/Plot'
import TimeFrame from '../../features/timeFrame/TimeFrame'
import {setPoints} from '../../entities/plot/model/plotSlice'
import {getSummaryPoints} from '../../shared/getPoints'
import gasPrice from '../../shared/gas_price.json'


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Chart = () => {
    const dispatch = useDispatch()

    const timeFrame = useSelector(state => state.dataParameters.timeFrame)
    const discreteness = useSelector(state => state.dataParameters.discreteness)
    const plotData = useSelector(state => state.plot.value)

    useEffect(() => {
        dispatch(setPoints(getSummaryPoints(discreteness.title, timeFrame, gasPrice.ethereum.transactions, 3)))
    }, [timeFrame])

    return (
        <Container>
            <Discreteness/>
            <Plot data={plotData}/>
            <TimeFrame/>
        </Container>
    )
}

export default Chart
