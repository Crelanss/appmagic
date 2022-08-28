import React from 'react'
import {useSelector} from 'react-redux'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

import {getXAxisPoints} from '../../shared/getXAxisPoints'


const Plot = ({data}) => {
    const timeFrame = useSelector(state => state.dataParameters.timeFrame)

    const tooltipFormatter = (value) => {
        return new Date(value).toLocaleString()
    }

    return (
        <LineChart
            width={1300}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray=""/>
            <XAxis dataKey="time" tickFormatter={date => getXAxisPoints(date, timeFrame)}/>
            <YAxis/>
            <Tooltip
                labelFormatter={value => tooltipFormatter(value)}
            />
            <Legend/>
            <Line type="monotone" dataKey="gasPrice" stroke="#8884d8" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="vwap" stroke="#82ca9d"/>
        </LineChart>

    )
}

export default Plot
