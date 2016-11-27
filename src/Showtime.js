import React, { Component } from 'react';
import './Showtime.css';
import Formatter from './formatter';

class Showtime extends Component {
  render() {
    return(
      <div className={'showtime ' + (this.props.movie.eligible ? 'eligible' : 'ineligible')}>
        <span className="title">{this.props.movie.title}</span>
        <span className="time"> @ {Formatter.formatTime(this.props.showtime.datetime)}</span>
      </div>
    );
  }
}

export default Showtime;
