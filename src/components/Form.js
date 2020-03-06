import React from 'react'

const Form = ({handleChange, handleSubmit, errors}) => {
  const { titleError, dateError, timeError } = errors
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="dataInput">
          <input type="text" placeholder="Name your event..." name="title" onChange={handleChange}/>
            {titleError !== '' && <div className="error">{titleError}</div>}
        </div>
        <div className="dataInput">
          <input type="date" placeholder="Add date of it..." name="date" onChange={handleChange}/>
            {dateError !== '' && <div className="error">{dateError}</div>}
            </div>
        <div className="dataInput">  
          <input type="time" name="time" placeholder="Add time for them..." onChange={handleChange}/>
          {/* {time.length > 0 &&
            <div className="error">{time}</div>
          } */}
        </div>
        <div className="submitInput">
          <input type="submit" value="Add event"/>
        </div>  
      </form>
    </div>
  )
}

export default Form
