import React from 'react'
import Timer from './Timer';

const Event = ({title, description, dateTime}) => {
  return (
    <div className="event">
      <h2 className="title">
        Event name: {title}
        </h2>
      <p>Description: {description}dsdsdsdsdsdsdksodksodksokdosdksoddsdsdsdsdsdsdksodksodksokdosdksod</p>
      <Timer dateTime={dateTime}/>
    </div>
  )
}

export default Event