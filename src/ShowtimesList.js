import React, { Component } from 'react';
import Showtime from './Showtime';

class ShowtimesList extends Component {
  render() {
    var showtimeComponents = [];
    for (var showtime of this.props.showtimes) {
      if (showtime.movie.checked) {
        var key = `${showtime.movie.id}-${showtime.datetime}`;
        showtimeComponents.push(
          <Showtime
            key={key}
            showtime={showtime}
            datetimeRanges={this.props.datetimeRanges}
            onShowtimeSelected={this.props.onShowtimeSelected}
            conflictsWithSelected={this.props.showtimes.conflictsWithSelected(showtime)}
          />
        );
      }
    }

    return(
      <div>
        {showtimeComponents}
      </div>
    );
  }
}

export default ShowtimesList;
