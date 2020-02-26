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

  componentDidMount() {
    const events = JSON.parse(localStorage.getItem("events")) || [];
      this.setState(() => ({
        events
      }))
  }

  handleChange = ({ target: { name, value } }) => {
      const data = { ...this.state.eventInfo, [name]: value}
      this.setState(() => ({
        eventInfo: data,
      }))
  }

  handleSubmit = event => {
    event.preventDefault()
    const data = {...this.state.eventInfo}
    const { id } = data
    const updatedEvent = {...data, id: id + 1 }

    this.setState(() => ({
      eventInfo: updatedEvent,
      events: [...this.state.events, updatedEvent]
    }), () => {
      localStorage.setItem('events', JSON.stringify(this.state.events))
    })
  }

render() {
  return (
    <div className="calendar">
      <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      {this.state.events.length > 0 &&
        <div className="calendar-container">
          {this.state.events.map( event => (
            <Event {...event} key={event.id}/>
          ))}
        </div>
      }
    </div>
  )
 }
}

export default Calendar