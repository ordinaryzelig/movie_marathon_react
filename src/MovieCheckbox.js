import React, { Component } from 'react';

class MovieCheckbox extends Component {
  render() {
    return(
      <label>
        <input type="checkbox" onChange={this.onChange}/>
        {this.props.movie.title}
      </label>
    );
  }

  onChange() {
    console.log('hi');
  }
}

export default MovieCheckbox;
