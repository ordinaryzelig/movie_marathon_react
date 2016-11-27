import React, { Component } from 'react';
import Rcslider from 'rc-slider';
require('rc-slider/assets/index.css');
import Formatter from './formatter';

class MoviesFilterTimes extends Component {
  constructor(props) {
    super(props);

    this.sortedShowtimes = this.props.datetimes.sort();

    this.earliestTime = this.props.datetimes[0]
    this.floorTime = this.floor(this.earliestTime);

    this.latestTime = this.props.datetimes[this.props.datetimes.length - 1];
    this.ceilingTime = this.ceiling(this.latestTime);

    this.max = (this.ceilingTime - this.floorTime) / 60000;

    this.formatTip = this.formatTip.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return(
      <Rcslider
        min={0}
        max={this.max}
        step={15}
        tipFormatter={this.formatTip}
        range
        defaultValue={[0, this.max]}
        onChange={this.onChange}
      />
    );
  }

  onChange(range) {
    var minDatetime = this.addMinutes(this.floorTime, range[0]);
    var maxDatetime = this.addMinutes(this.floorTime, range[1]);
    this.props.rangeChanged([minDatetime, maxDatetime]);
  }

  formatTip(minutes) {
    var adjusted = this.addMinutes(this.floorTime, minutes);
    return Formatter.formatTime(adjusted);
  }

  addMinutes(datetime, minutes) {
    return new Date(datetime.getTime() + minutes*60000);
  }

  floor(datetime) {
    return this.addMinutes(datetime, -datetime.getMinutes());
  }

  ceiling(datetime) {
    return this.addMinutes(datetime, 60 - datetime.getMinutes());
  }
}

export default MoviesFilterTimes;
