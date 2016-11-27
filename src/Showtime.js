import React, { Component } from 'react';
import './Showtime.css';
import Formatter from './Formatter';

class Showtime extends Component {
  render() {
    return(
      <div
        className={'showtime ' + this.selectableClass()}
        style={{marginLeft: this.marginLeft(), width: this.runtimeWidth()}}
        onClick={() => this.props.onShowtimeSelect(this.props.showtime)}
      >
        <span className="title">{this.props.showtime.movie.title}</span>
        <span className="time">{Formatter.formatTime(this.props.showtime.datetime)}</span>
      </div>
    );
  }

  selectableClass() {
    if (this.props.showtime.selected) {
      return 'selected';
    }
    if (!this.props.showtime.movie.selected && this.props.showtime.withinRange && !this.props.conflictsWithSelected) {
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

  runtimeWidth() {
    var spanMinutes = (this.props.datetimeRanges.ceiling - this.props.datetimeRanges.floor) / 60000;
    return (this.props.showtime.runtime / spanMinutes) * 100;
  }
}

export default Showtime;
