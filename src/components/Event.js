import React from 'react'
import Timer from './Timer'

const Event = ({ id, title, description, dateTime, removeEvent }) => {
  return (
    <div className="event" id={id}>
      <h2 className="title">Event name: {title}</h2>

      <p>Description: {description}</p>

      <Timer dateTime={dateTime} />

      <button className="deleteBtn" onClick={removeEvent}>
        Delete
      </button>
    </div>
  )
}

export default Event
