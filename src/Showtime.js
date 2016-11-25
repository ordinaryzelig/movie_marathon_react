import React, { Component } from 'react';

class Showtime extends Component {
  render() {
    return(
      <div>{this.props.movie.title} @ {this.props.showtime.datetime}</div>
    );
  }
}

export default Showtime;
