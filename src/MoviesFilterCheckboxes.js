import React, { Component } from 'react';
import Formatter from './Formatter';
import './MoviesFilterCheckboxes.css';

class MoviesFilterCheckboxes extends Component {
  render() {
    var checkboxes = this.props.movies.map((movie) => {
      return(
        <li key={`${movie.title} ${movie.id}`} className={movie.checked ? 'checked' : ''}>
          <label>
            <input type="checkbox" checked={movie.checked} onChange={(event) => this.props.movieChecked(movie.id, event.target.checked)} />
            <span className="title">{movie.title}</span> <span className="runtime">({Formatter.formatRuntime(movie.runtime)})</span>
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
