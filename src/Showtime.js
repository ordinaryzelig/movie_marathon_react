import React, { Component } from 'react';
import './Showtime.css';

class Showtime extends Component {
  render() {
    return(
      <div className={(this.props.movie.eligible ? 'eligible' : 'ineligible') + ' showtime'}>
        {this.props.movie.title} @ {this.props.showtime.datetime}
      </div>
    );
  }
}

export default Showtime;
