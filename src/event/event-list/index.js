import React, { PropTypes } from 'react'

import { transformEvents } from '../utils/transform-events'
import Month from './month'

const propTypes = {
    allEvents: PropTypes.array.isRequired,
    year: PropTypes.number,
    updateEvent: PropTypes.func,
    refetch: PropTypes.func,
    deleteEvent: PropTypes.func,
    loading: PropTypes.bool
}
const defaultProps = {
    allEvents: [],
    year: new Date().getFullYear()
}

const EventList = ({allEvents, year, updateEvent, refetch, deleteEvent, loading}) => {
    const events = transformEvents({year})({allEvents})

    return (
        <div className={`event-list ${loading ? 'loading' : ''}`}>
            <div className='row'><h1>Các sự kiện quan trọng trong năm {year}</h1></div>
            <div>
                {
          Object
            .keys(events)
            .map((month, index) =>
                <Month
                    key={index}
                    month={month}
                    events={events[month]}
                    updateEvent={updateEvent}
                    refetch={refetch}
                    deleteEvent={deleteEvent} />
            )
        }
            </div>
        </div>
    )
}

EventList.propTypes = propTypes
EventList.defaultProps = defaultProps

export default EventList
