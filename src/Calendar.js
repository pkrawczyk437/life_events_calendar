import React, { Component } from 'react'
import './styles/Calendar.scss';
import { Event, Form } from './components';

class Calendar extends Component {
  state = {
    eventInfo: {
      id: 0,
      title: '',
      dateTime: '',
      description: ''
    },
    errors: {
      titleError: '',
      dateTimeError: '',
      descriptionError: ''
    },
    isValid: false,
    events: []
  }

  addEventToLocalStorage = () => {
    const { events } = this.state
    localStorage.setItem('events', JSON.stringify(events));
  }

  addEvent = () => {
    const { isValid, eventInfo, events } = this.state
    const lastEventId = events.length > 0 ? events[events.length - 1].id + 1 : 0;
    const event = {...eventInfo, id: lastEventId}
    if(isValid) {
      this.setState(() => ({ 
        eventInfo: event,
        events: [...events, event]
       }), () => {
         this.addEventToLocalStorage();
        })
    }
  }

  validateInputs = () => {
    const { title, dateTime, description } = this.state.eventInfo
    let errors = { titleError: '', dateTimeError: '', descriptionError: ''};
    let isValid = false;

    if(!title) {
      errors.titleError = 'Title is required';
    }

    if(!dateTime) {
      errors.dateTimeError = 'Date and time are required';
    }

    if(!description) {
      errors.descriptionError = 'Description is required';
    }

    if(title && dateTime && description) {
      isValid = true;
    }

    this.setState(() => ({
      errors,
      isValid
    }), () => {
      this.addEvent();
    })
 }

  handleChange = ({ target: { name, value } }) => {
    const { eventInfo } = this.state
      this.setState(() => ({ eventInfo: {...eventInfo, [name]: value} }))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.validateInputs();
  }

  componentDidMount() {
    const events = JSON.parse(localStorage.getItem("events")) || [];
      this.setState(() => ({
        events
      }))
  }

render() {
  const { errors, isValid, events } = this.state;
  return (
    <>
      <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} errors={errors} isValid={isValid}/>
      {events.length > 0 &&
        <div className="events">
          {events.map( event => (
              <Event {...event} key={event.id}/>
          ))}
        </div>
      }
    </>
  )

 }
}

export default Calendar