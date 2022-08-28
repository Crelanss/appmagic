import vwap from 'vwap'

import {discretOptions} from './timeConstants'


const getVwap = (pointsArray, frequency) => {
    for (let i = 0; i < pointsArray.length; i += frequency) {
        let rest = frequency

        if ((pointsArray.length - i) % frequency !== 0 && pointsArray.length - i < frequency) {
            rest = pointsArray.length - i
        }

        const readyToVwapArray = pointsArray.slice(i, i + rest).map((element) => {
            return [element.gasValue, element.gasPrice]
        })

        const vwapValue = vwap(readyToVwapArray)

        for (let j = i; j < i + rest; j++) {
            pointsArray[j].vwap = vwapValue
        }
    }

    return pointsArray
}

const getTimeFramePoints = (timeFrame, pointsArray) => {
    const formatDate = JSON.parse(JSON.stringify(pointsArray))

    formatDate.forEach(element => {
        element.time = '20' + (element.time)
        element.time = new Date(element.time)
    })

    const arr = formatDate.map(element => {
        return {
            time: element.time,
            gasPrice: element.gasPrice,
            gasValue: element.gasValue,
            vwap: 10
        }
    })

    if (timeFrame.number !== '') {
        const lastDate = arr[arr.length - 1].time
        const firstDate = new Date(lastDate)
        firstDate.setDate(lastDate.getDate() - timeFrame.number)

        return arr.filter((element) => {
            if (element.time >= firstDate) {
                return element
            }
        })
    } else {
        return arr
    }
}

const getPointsForDay = (framedPointsArray) => {
    return framedPointsArray.filter((element, index, array) => {
        if (index !== array.length - 1) {
            if (element.time.getDay() !== array[index + 1].time.getDay()) {
                return element
            }
        } else {
            return element
        }
    })
}

const getPointsForWeek = (dayDiscretedPointsArray) => {
    return dayDiscretedPointsArray.filter((element, index) => {
        if (index % 7 === 0) {
            return element
        }
    })
}

export const getSummaryPoints = (discreteness, timeFrame, pointsArray, frequency) => {
    switch (discreteness) {
        case discretOptions.HOUR.title :
            return getVwap(getTimeFramePoints(timeFrame, pointsArray), frequency)
        case discretOptions.DAY.title :
            return getVwap(getPointsForDay(getTimeFramePoints(timeFrame, pointsArray)), frequency)
        case discretOptions.WEEK.title :
            return getVwap(getPointsForWeek(getPointsForDay(getTimeFramePoints(timeFrame, pointsArray))), frequency)
        default :
            return 0
    }
}
