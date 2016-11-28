import React, { Component } from 'react';
import './Showtime.css';
import Datetime from './Datetime';

class Showtime extends Component {
  render() {
    return(
      <div
        className={'showtime ' + this.selectableClass()}
        style={{marginLeft: this.marginLeft(), width: this.runtimeWidth()}}
        onClick={() => this.props.onShowtimeSelect(this.props.showtime)}
      >
        <div
          className="title"
          title={this.props.showtime.movie.title}
        >
          {this.props.showtime.movie.title}
        </div>
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
    var spanMinutes = Datetime.minutesBetween(this.props.datetimeRanges.floor, this.props.datetimeRanges.ceiling);
    var percent = (this.props.showtime.runtime / spanMinutes) * 100;
    return `${percent}%`;
  }
}

export default Showtime;
