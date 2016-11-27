import React, { Component } from 'react';
import './App.css';
import MOVIES from './MOVIES';
import ShowtimesList from './ShowtimesList';
import SelectedShowtimes from './SelectedShowtimes';

import MoviesFilter from './MoviesFilter';
import Datetime from './Datetime';

class App extends Component {
  constructor(props) {
    super(props);

    this.initMovies(MOVIES);
    this.datetimeRanges = this.calculateDatetimeRanges(MOVIES);

    this.state = {
      movies: MOVIES,
      showtimes: this.extractShowtimes(MOVIES),
    };
    this.movieChecked = this.movieChecked.bind(this);
    this.rangeChanged = this.rangeChanged.bind(this);
    this.showtimeSelected = this.showtimeSelected.bind(this);
  }

  render() {
    return (
      <div>
        <MoviesFilter
          movies={this.state.movies}
          movieChecked={this.movieChecked}
          rangeChanged={this.rangeChanged}
          datetimeRanges={this.datetimeRanges}
        />
        <SelectedShowtimes
          showtimes={this.selectedShowtimes()}
        />
        <ShowtimesList
          showtimes={this.state.showtimes}
          datetimeRanges={this.datetimeRanges}
          showtimeSelected={this.showtimeSelected}
        />
      </div>
    );
  }

  movieChecked(movieId, checked) {
    var newMovies = this.state.movies.slice();
    for (var movie of newMovies) {
      if (movie.id === movieId) {
        movie.checked = checked;
      }
    }
    this.setState({movies: newMovies});
  }

  rangeChanged(range) {
    var newMovies = this.state.movies.map((movie) => {
      movie.showtimes = movie.showtimes.map((showtime) => {
        showtime.withinRange = range[0] <= showtime.datetime && range[1] >= showtime.datetime;
        return showtime;
      });
      return movie;
    });
    this.setState({movies: newMovies});
  }

  showtimeSelected(showtime) {
    if (!showtime.selected) {
      this.markSelected(showtime);
      //this.makeMovieIneligible(showtime.movie);
      //this.makeConflictingShowtimesIneligible(showtime);
    }
  }

  //////////
  // Helpers

  initMovies(movies) {
    for (var movie of movies) {
      movie.checked = false;
      for (var showtime of movie.showtimes) {
        showtime.movie = movie;
        showtime.datetime = new Date(showtime.datetime);
        showtime.withinRange = true;
      }
    }
  }

  extractShowtimes(movies) {
    var showtimes = [];
    for (var idx = 0; idx < movies.length; idx++) {
      var movie = movies[idx];
      showtimes = showtimes.concat(movie.showtimes);
    }
    showtimes.sort(this.showtimeSorter);
    return showtimes;
  }

  calculateDatetimeRanges(movies) {
    var datetimes = [];
    for (var movie of movies) {
      var movieDatetimes = movie.showtimes.map(function(showtime) {return showtime.datetime});
      datetimes = datetimes.concat(movieDatetimes);
    }
    var sortedDatetimes = datetimes.sort();
    return({
      floor: Datetime.floor(sortedDatetimes[0]),
      ceiling: Datetime.ceiling(sortedDatetimes[sortedDatetimes.length - 1])
    });
  }

  markSelected(selected) {
    var showtimes = this.state.showtimes.slice()
    for (var idx = 0; idx < showtimes.length; idx++) {
      var showtime = showtimes[idx];
      if (showtime === selected) {
        showtime.selected = true;
      }
    }
    this.setState({showtimes: showtimes});
  }

  showtimeSorter(a, b) {
    if (a.datetime < b.datetime) { return -1; }
    if (a.datetime > b.datetime) { return 1; }
    return 0;
  }

  selectedShowtimes() {
    return this.state.showtimes.filter(function(showtime) { return showtime.selected; } )
  }
}

export default App;
