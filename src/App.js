import React, { Component } from 'react';
import './App.css';
import MOVIES from './MOVIES';
import Datetime from './Datetime';

import ShowtimesList from './ShowtimesList';
import SelectedShowtimes from './SelectedShowtimes';
import MoviesFilterCheckboxes from './MoviesFilterCheckboxes';
import MoviesFilterTimes from './MoviesFilterTimes';

class App extends Component {
  constructor(props) {
    super(props);

    this.initMovies(MOVIES);

    this.state = {
      movies: MOVIES,
      showtimes: this.extractShowtimes(MOVIES),
    };
    this.datetimeRanges = this.calculateDatetimeRanges(this.state.showtimes);
    this.onMovieCheckboxToggle = this.onMovieCheckboxToggle.bind(this);
    this.onFilterTimeChange = this.onFilterTimeChange.bind(this);
    this.onShowtimeSelect = this.onShowtimeSelect.bind(this);
  }

  render() {
    return (
      <div>
        <MoviesFilterCheckboxes
          movies={this.state.movies}
          onMovieCheckboxToggle={this.onMovieCheckboxToggle}
        />
        <SelectedShowtimes
          showtimes={this.state.showtimes.selected()}
        />
        <MoviesFilterTimes
          datetimeRanges={this.datetimeRanges}
          onFilterTimeChange={this.onFilterTimeChange}
        />
        <ShowtimesList
          showtimes={this.state.showtimes}
          datetimeRanges={this.datetimeRanges}
          onShowtimeSelect={this.onShowtimeSelect}
        />
      </div>
    );
  }

  onMovieCheckboxToggle(movieId, checked) {
    var newMovies = this.state.movies.slice();
    for (var movie of newMovies) {
      if (movie.id === movieId) {
        movie.checked = checked;
      }
    }
    this.setState({movies: newMovies});
  }

  onFilterTimeChange(range) {
    var newMovies = this.state.movies.map((movie) => {
      movie.showtimes = movie.showtimes.map((showtime) => {
        var startsWithinRange = range[0] <= showtime.datetime;
        var endsWithinRange = showtime.endTime <= range[1];
        showtime.withinRange = startsWithinRange && endsWithinRange;
        return showtime;
      });
      return movie;
    });
    this.setState({movies: newMovies});
  }

  onShowtimeSelect(showtime) {
    if (showtime.selected) {
      this.unmarkSelected(showtime);
      return;
    }
    if (
      !showtime.selected
        && !showtime.movie.selected
        && !this.state.showtimes.conflictsWithSelected(showtime)
        && showtime.withinRange
    ) {
      this.markSelected(showtime);
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
        if (!showtime.runtime) {
          showtime.runtime = 120;
        }
        showtime.endTime = Datetime.addMinutes(showtime.datetime, showtime.runtime);
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

    this.addShowtimeFunctions(showtimes);

    return showtimes;
  }

  calculateDatetimeRanges(showtimes) {
    var startTimes = showtimes
      .map(function(showtime) { return showtime.datetime; })
      .sort();
    var endTimes = showtimes
      .map(function(showtime) { return showtime.endTime; })
      .sort();
    return({
      floor: Datetime.floor(startTimes[0]),
      ceiling: Datetime.ceiling(endTimes[endTimes.length - 1])
    });
  }

  markSelected(selected) {
    this.setShowtimeState(selected, function(newShowtime) {
      newShowtime.selected = true;
      newShowtime.movie.selected = true;
    });
  }

  unmarkSelected(selected) {
    this.setShowtimeState(selected, function(newShowtime) {
      newShowtime.selected = false;
      newShowtime.movie.selected = false;
    });
  }

  setShowtimeState(oldShowtime, setNewState) {
    var showtimes = this.state.showtimes.slice()
    for (var idx = 0; idx < showtimes.length; idx++) {
      var newShowtime = showtimes[idx];
      if (newShowtime === oldShowtime) {
        setNewState(newShowtime);
      }
    }
    this.addShowtimeFunctions(showtimes);
    this.setState({showtimes: showtimes});
  }

  showtimeSorter(a, b) {
    if (a.datetime < b.datetime) { return -1; }
    if (a.datetime > b.datetime) { return 1; }
    return 0;
  }

  addShowtimeFunctions(showtimes) {
    showtimes.selected = function() {
      var selected = this.filter(function(showtime) { return showtime.selected; } )
      return selected;
    };

    showtimes.conflictsWithSelected = function(showtime) {
      for (var selected of showtimes.selected()) {
        var conflicts =
          (
            selected.datetime <= showtime.datetime
              && showtime.datetime <= selected.endTime
          )
          ||
          (
            showtime.endTime >= selected.datetime
              && showtime.endTime <= selected.endTime
          )
        if (conflicts) { return conflicts }
      }
      return false;
    }
  }
}

export default App;
