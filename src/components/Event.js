import React from 'react'
import moment from 'moment';

const Event = ({title, date, time, description}) => {
  return (
    <div className="event">
      <h2>{title}</h2>
      <p>{moment(date).format('DD-MM-YYYY')}</p>
      <p>{time}</p>
      <p>{description}</p>
    </div>
  )
}

export default Event