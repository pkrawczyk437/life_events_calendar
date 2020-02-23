import React, { Component } from 'react'
import './styles/App.scss';
import Event from './components/Event'
import Form from './components/Form'

class Calendar extends Component {
  state = {
    eventInfo: {
      id: 0,
      title: '',
      date: '',
      time: '',
      description: ''
    },
    events: []
  }

  handleChange = ({ target: { name, value } }) => {
    const { id } = this.state.eventInfo
    const data = { ...this.state.eventInfo, id: id + 1 , [name]: value}
    this.setState(() => ({
      eventInfo: data,
      events: [...this.state.events, data]
    }), () => console.log(this.state))
  }

  handleSubmit = event => {
    event.preventDefault();
    const { events } = this.state
    localStorage.setItem('events', JSON.stringify(events))
  }

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