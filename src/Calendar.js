import React, { Component } from 'react'
// import moment from 'moment';
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
    events: []
  }

  // componentDidMount() {
  //   const events = JSON.parse(localStorage.getItem("events")) || [];
  //   console.log(events)
  //     this.setState(() => ({
  //       events
  //     }))
  // }

  validateInputs = () => {
    const { title, date, time } = this.state.eventInfo
    let errors = { titleError: '', dateError: '', timeError: '' };
    
    if(title === "") {
      errors.titleError = 'Title is required';
    }

    if(date === "") {
      errors.dateError = 'Date is required';
    }
    
    this.setState(() => ({ errors }))
 }

  handleChange = ({ target: { name, value } }) => {
      this.setState(() => ({ eventInfo: {...this.state.eventInfo, [name]: value} }))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.validateInputs();
    console.log(this.state);
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