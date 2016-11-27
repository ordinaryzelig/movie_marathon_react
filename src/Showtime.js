import React, { Component } from 'react';
import './Showtime.css';
import Formatter from './formatter';

class Showtime extends Component {
  render() {
    return(
      <div className={'showtime ' + this.selectableClass()}>
        <span className="title">{this.props.movie.title}</span>
        <span className="time"> @ {Formatter.formatTime(this.props.showtime.datetime)}</span>
      </div>
    );
  }

  selectableClass() {
    //console.log(this.props.movie.checked);
    //console.log(this.props.showtime.withinRange);
    if (this.props.movie.checked && this.props.showtime.withinRange) {
      return 'selectable';
    } else {
      return 'unselectable';
    }
  }
}

export default Showtime;
