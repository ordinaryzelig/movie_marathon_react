import React, { Component } from 'react';
import './App.css';
import MOVIES from './MOVIES';
import MoviesList from './MoviesList';
import MoviesFilter from './MoviesFilter';

class App extends Component {
  constructor(props) {
    super(props);
    for (var movie of MOVIES) {
      movie.checked = false;
      for (var showtime of movie.showtimes) {
        showtime.datetime = new Date(showtime.datetime);
        showtime.withinRange = true;
      }
    }
    this.state = {movies: MOVIES};
    this.movieChecked = this.movieChecked.bind(this);
    this.rangeChanged = this.rangeChanged.bind(this);
  }

  render() {
    return (
      <div>
        <MoviesFilter movies={this.state.movies} movieChecked={this.movieChecked} rangeChanged={this.rangeChanged} />
        <MoviesList data={this.state.movies} />
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
}

export default App;
