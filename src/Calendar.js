import React, { Component } from 'react'
import './styles/Calendar.scss';
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
    errors: {
      title: '',
      date: '',
      time: ''
    },
    events: []
  }

  componentDidMount() {
    const events = JSON.parse(localStorage.getItem("events")) || [];
      this.setState(() => ({
        events
      }))
  }

  validateInputs = (fieldName, fieldValue) => {
    const errors = {...this.state.errors, [fieldName]: fieldValue}
    if(errors[fieldName] === "") {
      errors[fieldName] = "Enter data"
    }
    else {
      errors[fieldName] = "";
    }

    this.setState(() => ({
      errors: errors,
    }), () => console.log(this.state))
  }

  handleChange = ({ target: { name, value } }) => {
      const data = { ...this.state.eventInfo, [name]: value}
      this.setState(() => ({
        eventInfo: data
      }), () => this.validateInputs(name, value))
  }

  handleSubmit = event => {
    event.preventDefault()
    const data = {...this.state.eventInfo}
    const { id } = data
    const updatedEvent = {...data, id: id + 1 }

    this.setState(() => ({
      eventInfo: updatedEvent,
      events: [...this.state.events, updatedEvent],
    }), () => {
      localStorage.setItem('events', JSON.stringify(this.state.events))
    })
  }

render() {
  const { errors } = this.state;

  return (
    <>
      <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} errors={errors}/>
      {this.state.events.length > 0 &&
        <div className="events">
          {this.state.events.map( event => (
            <Event {...event} key={event.id}/>
          ))}
        </div>
      }
    </>
  )

 }
}

export default Calendar