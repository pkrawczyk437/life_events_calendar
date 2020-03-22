import React from 'react'

const Form = ({ handleChange, handleSubmit, errors, isValid }) => {
  const { titleError, dateTimeError, descriptionError } = errors

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="dataInput">
          <input
            name="title"
            onChange={handleChange}
            placeholder="Name your event..."
            type="text"
          />
          {titleError !== '' && isValid === false && <div className="error">{titleError}</div>}
        </div>
        <div className="dataInput">
          <input
            max="2040-01-01T00:00"
            min="2020-01-01T00:00"
            name="dateTime"
            onChange={handleChange}
            placeholder="Add date of it..."
            type="datetime-local"
          />
          {dateTimeError !== '' && isValid === false && (
            <div className="error">{dateTimeError}</div>
          )}
        </div>
        <div className="dataInput">
          <input
            name="description"
            onChange={handleChange}
            placeholder="Add some description..."
            type="text"
          />
          {descriptionError !== '' && isValid === false && (
            <div className="error">{descriptionError}</div>
          )}
        </div>
        <div className="submitInput">
          <input type="submit" value="Add event" />
        </div>
      </form>
    </div>
  )
}

export default Form
