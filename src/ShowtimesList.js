import React, { Component } from 'react';
import Showtime from './Showtime';

class ShowtimesList extends Component {
  render() {
    var showtimeComponents = this.props.showtimes.map((showtime) => {
      var key = `${showtime.movie.id}-${showtime.datetime}`;
      return(
        <Showtime
          key={key}
          showtime={showtime}
          datetimeRanges={this.props.datetimeRanges}
        />
      );
    });

    return(
      <div>
        {showtimeComponents}
      </div>
    );
  }
}

export default ShowtimesList;
