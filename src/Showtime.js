import React, { Component } from 'react';
import './Showtime.css';

class Showtime extends Component {
  render() {
    return(
      <div className={'showtime ' + (this.props.movie.eligible ? 'eligible' : 'ineligible')}>
        <span className="title">{this.props.movie.title}</span>
        <span className="time"> @ {this.formatTime(this.props.showtime.datetime)}</span>
      </div>
    );
  }

  formatTime(datetime) {
    var date = new Date(datetime);
    var hours = this.formatHour(date.getHours());
    var minutes = this.formatMinutes(date.getMinutes());
    var ampm = this.formatMeridiem(date.getHours());
    return `${hours}:${minutes} ${ampm}`;
  }

  formatHour(hours) {
    if (hours > 12) {
      return hours % 12 + 1;
    } else {
      return hours;
    }
  }

  formatMinutes(minutes) {
    if (minutes < 10) {
      return `0${minutes}`;
    } else {
      return '' + minutes;
    }
  }

  formatMeridiem(hours) {
    if (hours > 12) {
      return 'p.m.';
    } else {
      return 'a.m.';
    }
  }
}

export default Showtime;
