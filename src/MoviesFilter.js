import React, { Component } from 'react';
import './MoviesFilter.css';
import MoviesFilterCheckboxes from './MoviesFilterCheckboxes';
import MoviesFilterTimes from './MoviesFilterTimes';

class MoviesFilter extends Component {
  constructor(props) {
    super(props);

    this.sortedShowtimes = []
    for (var movie of props.movies) {
      this.sortedShowtimes = this.sortedShowtimes.concat(movie.showtimes);
    }
    this.sortedShowtimes = this.sortedShowtimes.sort(function(a, b) {
      if (a.datetime < b.datetime) { return -1; }
      if (a.datetime > b.datetime) { return 1; }
      return 0;
    });
  }

  render() {
    return(
      <div>
        <MoviesFilterCheckboxes movies={this.props.movies} movieChecked={this.props.movieChecked} />
        <MoviesFilterTimes earliestTime={this.earliestTime(this.props.movies)} latestTime={this.latestTime(this.props.movies)} />
      </div>
    );
  }

  earliestTime(movies) {
    return this.sortedShowtimes[0].datetime;
  }

  latestTime(movies) {
    return this.sortedShowtimes[this.sortedShowtimes.length - 1].datetime;
  }
}

export default MoviesFilter;
