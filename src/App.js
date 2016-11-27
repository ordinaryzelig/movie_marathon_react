import React, { Component } from 'react';
import './App.css';
import MOVIES from './MOVIES';
import ShowtimesList from './ShowtimesList';
import MoviesFilter from './MoviesFilter';
import Datetime from './Datetime';

class App extends Component {
  constructor(props) {
    super(props);

    this.initMovies(MOVIES);
    this.datetimeRanges = this.calculateDatetimeRanges(MOVIES);

    this.state = {movies: MOVIES};
    this.movieChecked = this.movieChecked.bind(this);
    this.rangeChanged = this.rangeChanged.bind(this);
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
        <ShowtimesList
          data={this.state.movies}
          datetimeRanges={this.datetimeRanges}
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
}

export default App;
