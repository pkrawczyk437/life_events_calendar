import React from 'react'

const Event = ({title, date, time, description}) => {
  return (
    <div className="event">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{description}</p>
    </div>
  )
}

export default Event
