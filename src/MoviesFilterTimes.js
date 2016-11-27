import React, { Component } from 'react';
import Rcslider from 'rc-slider';
require('rc-slider/assets/index.css');
import Formatter from './formatter';

class MoviesFilterTimes extends Component {
  constructor(props) {
    super(props);
    this.formatTip = this.formatTip.bind(this);
    this.earliestTime = this.addMinutes(this.props.earliestTime, -this.props.earliestTime.getMinutes());
    this.latestTime = this.addMinutes(this.props.latestTime, 60 - this.props.latestTime.getMinutes());
    this.max = (this.latestTime - this.earliestTime) / 60000;
  }

  render() {
    return(
      <div>
        <Rcslider min={0} max={this.max} step={15} tipFormatter={this.formatTip}/>
      </div>
    );
  }

  formatTip(minutes) {
    var adjusted = this.addMinutes(this.props.earliestTime, minutes);
    return Formatter.formatTime(adjusted);
  }

  addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
  }
}

export default MoviesFilterTimes;
