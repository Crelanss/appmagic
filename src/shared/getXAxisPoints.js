import {timeFrameOptions} from './timeConstants'
import moment from 'moment'


export const getXAxisPoints = (date, timeFrame) => {
    switch (timeFrame) {
        case timeFrameOptions.ONE_DAY:
            return moment(date).format('HH:mm')
        case timeFrameOptions.ONE_WEEK:
            return moment(date).format('MMM DD HH:mm')
        case timeFrameOptions.ONE_MONTH:
            return moment(date).format('MMM DD')
        case timeFrameOptions.THREE_MONTHS:
            return moment(date).format('MMM DD')
        case timeFrameOptions.SIX_MONTHS:
            return moment(date).format('gg MMM')
        case timeFrameOptions.MAX:
            return moment(date).format('gg MMM')
        default:
            return ''
    }
}
