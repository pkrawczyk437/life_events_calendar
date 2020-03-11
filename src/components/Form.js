import React from 'react'

const Form = ({handleChange, handleSubmit, errors, isValid}) => {
  const { titleError, dateError, timeError} = errors
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="dataInput">
          <input type="text" placeholder="Name your event..." name="title" onChange={handleChange}/>
            {titleError !== '' && isValid === false && <div className="error">{titleError}</div>}
        </div>
        <div className="dataInput">
          <input type="date" placeholder="Add date of it..." min="2020-01-01" max="2040-01-01" name="date" onChange={handleChange}/>
            {dateError !== '' && isValid === false && <div className="error">{dateError}</div>}
        </div>
        <div className="dataInput">  
          <input type="time" name="time" placeholder="Add time for them..." onChange={handleChange}/>
          {timeError !== '' && isValid === false && <div className="error">{timeError}</div>}
        </div>
        <div className="submitInput">
          <input type="submit" value="Add event"/>
        </div>  
      </form>
    </div>
  )
}

export default Form
