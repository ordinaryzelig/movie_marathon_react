import React, { Component } from 'react';
import Formatter from './Formatter';

class MoviesFilterCheckboxes extends Component {
  render() {
    var checkboxes = this.props.movies.map((movie) => {
      return(
        <li key={`${movie.title} ${movie.id}`}>
          <label>
            <input type="checkbox" checked={movie.checked} onChange={(event) => this.props.movieChecked(movie.id, event.target.checked)} />
            {movie.title}
          </label>
        </li>
      );
    });
    return(
      <ul id="movies-filter">
        {checkboxes}
      </ul>
    );
  }
}

export default MoviesFilterCheckboxes;
