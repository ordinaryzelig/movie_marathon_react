import React, { Component } from 'react';
import Formatter from './formatter';

class SelectedShowtimes extends Component {
  render() {
    var shoowtimeLis = this.props.showtimes.map(function(showtime) {
      var key = `${showtime.movie.id}-${showtime.datetime}`;
      return(
        <li key={key}>
          <span>{showtime.movie.title} @ {Formatter.formatTime(showtime.datetime)}</span>
        </li>
      );
    });
    return(
      <ul>{shoowtimeLis}</ul>
    );
  }
}

export default SelectedShowtimes;
