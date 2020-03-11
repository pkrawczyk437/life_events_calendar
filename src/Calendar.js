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
      // description: ''
    },
    errors: {
      titleError: '',
      dateError: '',
      timeError: ''
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
    console.log(event)
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
    const { title, date, time } = this.state.eventInfo
    let errors = { titleError: '', dateError: '', timeError: ''};
    let isValid = false;

    if(!title) {
      errors.titleError = 'Title is required';
    }

    if(!date) {
      errors.dateError = 'Date is required';
    }

    if(!time) {
      errors.timeError = 'Time is required';
    }

    if(title && date && time) {
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
      this.setState(() => ({ eventInfo: {...this.state.eventInfo, [name]: value} }))
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