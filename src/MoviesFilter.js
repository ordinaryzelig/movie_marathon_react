import React, { Component } from 'react';

class MoviesFilter extends Component {
  render() {
    var checkboxes = this.props.movies.map((movie) => {
      return(
        <li key={`${movie.title} ${movie.id}`}>
          <label>
            <input type="checkbox" onChange={(event) => this.props.movieChecked(movie.id, event.target.checked)} />
            {movie.title}
          </label>
        </li>
      );
    });
    return(
      <ul>
        {checkboxes}
      </ul>
    );
  }
}

export default MoviesFilter;
