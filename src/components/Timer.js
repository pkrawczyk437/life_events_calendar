import React, { Component } from 'react'
import moment from 'moment';

class Timer extends Component {
    state = {
        years: '',
        months: '',
        weeks: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    }

    componentDidMount() {
        this.interval = setInterval(() => {
          const { dateTime } = this.props
          const then = moment(dateTime);
          const now = moment();
          const difference = then.diff(now);
          const duration = moment.duration(difference);
          const months = duration.months()
          const days = duration.days();
          const hours = duration.hours();
          const minutes = duration.minutes();
          const seconds = duration.seconds();
          // console.log(countdown, days, hours, minutes, seconds);
          this.setState(() => ({ months, days, hours, minutes, seconds }))
        }, 1000);
    }

    componentWillUnmount() {
        if(this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { months, days, hours, minutes, seconds } = this.state

        return (
            <div className="timer">
              <div className="timer-item">
                {months}
                <span>months</span>
              </div>
              <div className="timer-item">
                {days}
                <span>days</span>
              </div>
              <div className="timer-item">
                {hours}
                <span>hours</span>
              </div>
              <div className="timer-item">
                {minutes}
                <span>minutes</span>
              </div>
              <div className="timer-item">
                {seconds}
                <span>seconds</span>
              </div>
            </div>
        )
    }
}

export default Timer
