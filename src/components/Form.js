import React from 'react'

const Form = ({handleChange, handleSubmit, errors, isValid}) => {
  const { titleError, dateTimeError, descriptionError } = errors
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="dataInput">
          <input type="text" placeholder="Name your event..." name="title" onChange={handleChange}/>
            {titleError !== '' && isValid === false && <div className="error">{titleError}</div>}
        </div>
        <div className="dataInput">
          <input type="datetime-local" placeholder="Add date of it..." min="2020-01-01T00:00" max="2040-01-01T00:00" name="dateTime" onChange={handleChange}/>
            {dateTimeError !== '' && isValid === false && <div className="error">{dateTimeError}</div>}
        </div>
        <div className="dataInput">
          <input type="text" placeholder="Add some description..." name="description" onChange={handleChange}/>
            {descriptionError !== '' && isValid === false && <div className="error">{descriptionError}</div>}
        </div>
        <div className="submitInput">
          <input type="submit" value="Add event"/>
        </div>  
      </form>
    </div>
  )
}

export default Form
