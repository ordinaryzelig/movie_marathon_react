import React, { Component } from 'react';
import './MoviesFilter.css';
import MoviesFilterCheckboxes from './MoviesFilterCheckboxes';
import MoviesFilterTimes from './MoviesFilterTimes';

class MoviesFilter extends Component {
  constructor(props) {
    super(props);

    this.datetimes = []
    for (var movie of props.movies) {
      this.datetimes = this.datetimes.concat(movie.showtimes.map(function(showtime) {return showtime.datetime}));
    }
  }

  render() {
    return(
      <div>
        <MoviesFilterCheckboxes movies={this.props.movies} movieChecked={this.props.movieChecked} />
        <MoviesFilterTimes datetimes={this.datetimes} rangeChanged={this.props.rangeChanged} />
      </div>
    );
  }

}

export default MoviesFilter;
