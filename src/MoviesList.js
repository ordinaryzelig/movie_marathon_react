import React, { Component } from 'react';
import Showtime from './Showtime';

class MoviesList extends Component {
  render() {
    var showtimes = [];
    for (var movie of this.props.data) {
      for (var showtime of movie.showtimes) {
        var key = `${movie.id}-${showtime.datetime}`;
        showtimes.push(
          <Showtime
            key={key}
            showtime={showtime}
            datetimeRanges={this.props.datetimeRanges}
          />
        );
      }
    }
    return(
      <div>
        {showtimes}
      </div>
    );
  }
}

export default MoviesList;
