import React, { Component } from 'react';
import MovieCheckbox from './MovieCheckbox';

class MoviesList extends Component {
  render() {
    var checkboxes = this.props.movies.map(function(movie) {
      return(
        <li key={`${movie.title} ${movie.id}`}>
          <MovieCheckbox movie={movie} />
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

export default MoviesList;
