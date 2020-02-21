import React from 'react'

const Form = ({handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name your event..." name="title" id="title" onChange={handleChange}/>
      <input type="date" placeholder="Add date of it..." name="date" id="date" onChange={handleChange}/>
      <input type="text" placeholder="Add time for them..." name="time" id="time" onChange={handleChange}/>
      <button type="submit">Add event</button>
    </form>
  )
}

export default Form
