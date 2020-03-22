import React, { Component } from 'react'
import moment from 'moment'

class Timer extends Component {
  state = {
    years: '',
    months: '',
    weeks: '',
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
    timeOver: false,
  }

  componentDidMount() {
    this.formatEventDate()
    this.interval = setInterval(this.formatEventDate, 1000)
  }

  formatEventDate = () => {
    const { dateTime } = this.props
    const then = moment(dateTime)
    const now = moment()
    const difference = then.diff(now)
    const duration = moment.duration(difference)
    const years = duration.years();
    const months = duration.months()
    const days = duration.days()
    const hours = duration.hours()
    const minutes = duration.minutes()
    const seconds = duration.seconds()
    this.setState(() => ({ years, months, days, hours, minutes, seconds }), this.stopTimer)
  }

  stopTimer = () => {
    const { months, days, hours, minutes, seconds } = this.state
    let timeOver = false
    if (months <= 0 && days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      timeOver = true
      this.setState(
        () => ({ timeOver }),
        () => clearInterval(this.interval),
      )
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render() {
    const { years, months, days, hours, minutes, seconds, timeOver } = this.state
    const { dateTime } = this.props
    return (
      <div className="timer">
        {timeOver ? (
          <React.Fragment>
            <div className={`timer-item ${timeOver ? 'pastEvent' : ''}`}>
              <span>{moment(dateTime).from(moment())}</span>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="timer-item">
              {years} <span>years</span>
            </div>

            <div className="timer-item">
              {months} <span>months</span>
            </div>

            <div className="timer-item">
              {days} <span>days</span>
            </div>

            <div className="timer-item">
              {hours} <span>hours</span>
            </div>

            <div className="timer-item">
              {minutes} <span>minutes</span>
            </div>

            <div className="timer-item">
              {seconds} <span>seconds</span>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default Timer
