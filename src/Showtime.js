import React, { Component } from 'react';
import './Showtime.css';
import Formatter from './formatter';

class Showtime extends Component {
  render() {
    return(
      <div
        className={'showtime ' + this.selectableClass()}
        style={{marginLeft: this.marginLeft()}}
        onClick={() => this.onClick(this.props.showtime)}
      >
        <span className="title">{this.props.showtime.movie.title}</span>
        <span className="time">{Formatter.formatTime(this.props.showtime.datetime)}</span>
      </div>
    );
  }

  onClick(showtime) {
    if (!showtime.selected) {
      this.props.showtimeSelected(this.props.showtime)
    }
  }

  selectableClass() {
    //console.log(this.props.movie.checked);
    //console.log(this.props.showtime.withinRange);
    if (this.props.showtime.movie.checked && this.props.showtime.withinRange) {
      return 'selectable';
    } else {
      return 'unselectable';
    }
  }

  marginLeft() {
    var percent = (this.props.showtime.datetime - this.props.datetimeRanges.floor)
      / (this.props.datetimeRanges.ceiling - this.props.datetimeRanges.floor)
      * 100;
    return `${percent}%`;
  }
}

export default Showtime;
