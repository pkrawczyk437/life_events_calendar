import React from 'react'

const Form = ({handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name your event..." name="title" onChange={handleChange}/>
      <input type="date" placeholder="Add date of it..." name="date" onChange={handleChange}/>
      <input type="text" placeholder="Add time for them..." name="time" onChange={handleChange}/>
      <button type="submit">Add event</button>
    </form>
  )
}

export default Form
