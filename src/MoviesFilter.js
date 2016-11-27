import React, { Component } from 'react';
import './MoviesFilter.css';
import MoviesFilterCheckboxes from './MoviesFilterCheckboxes';

class MoviesFilter extends Component {
  render() {
    return(
      <MoviesFilterCheckboxes movies={this.props.movies} movieChecked={this.props.movieChecked} />
    );
  }
}

export default MoviesFilter;
