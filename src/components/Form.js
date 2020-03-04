import React from 'react'

const Form = ({handleChange, handleSubmit, errors}) => {
  const { title, date, time } = errors
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="dataInput">
          <input type="text" placeholder="Name your event..." name="title" onChange={handleChange}/>
          {title.length > 0 &&
            <div className="error">{title}</div>
          }
        </div>
        <div className="dataInput">
          <input type="date" placeholder="Add date of it..." name="date" onChange={handleChange}/>
          {date.length > 0 &&
            <div className="error">{date}</div>
          }
        </div>
        <div className="dataInput">  
          <input type="time" name="time" placeholder="Add time for them..." onChange={handleChange}/>
          {time.length > 0 &&
            <div className="error">{time}</div>
          }
        </div>
        <div className="submitInput">
          <input type="submit" value="Add event"/>
        </div>  
      </form>
    </div>
  )
}

export default Form
