import React, { Component } from 'react'
import './styles/App.scss';
import Event from './components/Event'
import Form from './components/Form'

class Calendar extends Component {
  state = {
    events: [
      {
        id: 0,
        title: '',
        date: '',
        time: '',
        description: ''
      }
    ]
  }

  handleChange = ({target: {name, value}}) => {
    this.state.events.map((event, index) => {
      if (index === 0) {
        event[name] = value
      }
      return event
    })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { events } = this.state
  //   console.log(events)
  //   // localStorage.setItem('events', JSON.stringify(events))
  // }

render() {
  return (
    <div className="calendar">
      <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <div className="calendar-container">
          {this.state.events.map( event => (
            <Event {...event} key={event.id}/>
          ))}
        </div>
    </div>
  )
 }
}

export default Calendar