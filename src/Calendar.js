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

  handleChange = ({target: {name, id, value}}) => {
    const getInputValues = this.state.events.map(event  => {

      /*
      if(index === 0) {
        const copiedEvent = {...event}
      copiedEvent[name] = value
      }
      */
      return event
    })
    this.setState( () => ({
      events: getInputValues
    }), () => console.log(this.state.events))
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