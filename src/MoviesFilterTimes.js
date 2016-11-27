import React, { Component } from 'react';
import Rcslider from 'rc-slider';
require('rc-slider/assets/index.css');
import Formatter from './Formatter';
import Datetime from './Datetime';

class MoviesFilterTimes extends Component {
  constructor(props) {
    super(props);

    this.floorTime = props.datetimeRanges.floor;
    this.ceilingTime = props.datetimeRanges.ceiling;

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
        marks={this.marks()}
        defaultValue={[0, this.max]}
        onChange={this.onChange}
      />
    );
  }

  onChange(range) {
    var minDatetime = Datetime.addMinutes(this.floorTime, range[0]);
    var maxDatetime = Datetime.addMinutes(this.floorTime, range[1]);
    this.props.onFilterTimeChange([minDatetime, maxDatetime]);
  }

  formatTip(minutes) {
    var adjusted = Datetime.addMinutes(this.floorTime, minutes);
    return Formatter.formatTime(adjusted);
  }

  marks() {
    var marks = {};
    var numHourIntervals = Math.floor((this.props.datetimeRanges.ceiling - this.props.datetimeRanges.floor) / 60000 / 60);
    for (var hours = 0; hours <= numHourIntervals; hours++) {
      var minutes = hours * 60
      marks[minutes] = Formatter.formatTime(Datetime.addMinutes(this.props.datetimeRanges.floor, minutes));
    }
    return marks;
  }
}

export default MoviesFilterTimes;
