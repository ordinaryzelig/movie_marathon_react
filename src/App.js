import React, { Component } from 'react';
import './App.css';
import MoviesList from './MoviesList';

var MOVIES = [
  {
    "title": "Bad Moms",
    "id": "191125",
    "showtimes": [
      {
        "datetime": "2016-08-02T11:30:00-05:00"
      },
      {
        "datetime": "2016-08-02T12:35:00-05:00"
      },
      {
        "datetime": "2016-08-02T14:05:00-05:00"
      },
      {
        "datetime": "2016-08-02T15:10:00-05:00"
      },
      {
        "datetime": "2016-08-02T16:40:00-05:00"
      },
      {
        "datetime": "2016-08-02T19:30:00-05:00"
      },
      {
        "datetime": "2016-08-02T22:00:00-05:00"
      }
    ]
  },
  {
    "title": "Jason Bourne",
    "id": "190367",
    "showtimes": [
      {
        "datetime": "2016-08-02T11:00:00-05:00"
      },
      {
        "datetime": "2016-08-02T12:00:00-05:00"
      },
      {
        "datetime": "2016-08-02T13:00:00-05:00"
      },
      {
        "datetime": "2016-08-02T14:00:00-05:00"
      },
      {
        "datetime": "2016-08-02T15:00:00-05:00"
      },
      {
        "datetime": "2016-08-02T16:00:00-05:00"
      },
      {
        "datetime": "2016-08-02T17:00:00-05:00"
      },
      {
        "datetime": "2016-08-02T17:45:00-05:00"
      },
      {
        "datetime": "2016-08-02T18:00:00-05:00"
      },
      {
        "datetime": "2016-08-02T19:00:00-05:00"
      },
      {
        "datetime": "2016-08-02T20:00:00-05:00"
      },
      {
        "datetime": "2016-08-02T20:30:00-05:00"
      },
      {
        "datetime": "2016-08-02T21:00:00-05:00"
      },
      {
        "datetime": "2016-08-02T22:00:00-05:00"
      }
    ]
  },
  {
    "title": "Nerve",
    "id": "192705",
    "showtimes": [
      {
        "datetime": "2016-08-02T11:50:00-05:00"
      },
      {
        "datetime": "2016-08-02T14:30:00-05:00"
      },
      {
        "datetime": "2016-08-02T17:05:00-05:00"
      },
      {
        "datetime": "2016-08-02T19:40:00-05:00"
      },
      {
        "datetime": "2016-08-02T22:05:00-05:00"
      }
    ]
  },
  {
    "title": "Absolutely Fabulous",
    "id": "187674",
    "showtimes": [
      {
        "datetime": "2016-08-02T11:20:00-05:00"
      },
      {
        "datetime": "2016-08-02T13:50:00-05:00"
      },
      {
        "datetime": "2016-08-02T16:25:00-05:00"
      },
      {
        "datetime": "2016-08-02T18:50:00-05:00"
      },
      {
        "datetime": "2016-08-02T21:30:00-05:00"
      }
    ]
  },
  {
    "title": "Ice Age: Collision Course 3D",
    "id": "188285",
    "showtimes": [
      {
        "datetime": "2016-08-02T11:50:00-05:00"
      },
      {
        "datetime": "2016-08-02T14:15:00-05:00"
      },
      {
        "datetime": "2016-08-02T19:45:00-05:00"
      }
    ]
  },
  {
    "title": "Ice Age: Collision Course",
    "id": "188285",
    "showtimes": [
      {
        "datetime": "2016-08-02T13:15:00-05:00"
      },
      {
        "datetime": "2016-08-02T15:45:00-05:00"
      },
      {
        "datetime": "2016-08-02T18:15:00-05:00"
      },
      {
        "datetime": "2016-08-02T21:05:00-05:00"
      }
    ]
  },
  {
    "title": "Lights Out",
    "id": "148574",
    "showtimes": [
      {
        "datetime": "2016-08-02T11:05:00-05:00"
      },
      {
        "datetime": "2016-08-02T13:25:00-05:00"
      },
      {
        "datetime": "2016-08-02T15:35:00-05:00"
      },
      {
        "datetime": "2016-08-02T17:50:00-05:00"
      },
      {
        "datetime": "2016-08-02T20:05:00-05:00"
      },
      {
        "datetime": "2016-08-02T22:15:00-05:00"
      }
    ]
  },
  {
    "title": "Star Trek Beyond: An IMAX 3D Experience",
    "id": "188462",
    "showtimes": [
      {
        "datetime": "2016-08-02T13:10:00-05:00"
      },
      {
        "datetime": "2016-08-02T16:10:00-05:00"
      },
      {
        "datetime": "2016-08-02T19:10:00-05:00"
      },
      {
        "datetime": "2016-08-02T22:10:00-05:00"
      }
    ]
  },
  {
    "title": "Star Trek Beyond 3D",
    "id": "188462",
    "showtimes": [
      {
        "datetime": "2016-08-02T11:40:00-05:00"
      },
      {
        "datetime": "2016-08-02T14:40:00-05:00"
      },
      {
        "datetime": "2016-08-02T17:40:00-05:00"
      },
      {
        "datetime": "2016-08-02T20:40:00-05:00"
      }
    ]
  },
  {
    "title": "Star Trek Beyond",
    "id": "188462",
    "showtimes": [
      {
        "datetime": "2016-08-02T11:00:00-05:00"
      },
      {
        "datetime": "2016-08-02T12:25:00-05:00"
      },
      {
        "datetime": "2016-08-02T15:25:00-05:00"
      },
      {
        "datetime": "2016-08-02T18:25:00-05:00"
      },
      {
        "datetime": "2016-08-02T19:55:00-05:00"
      },
      {
        "datetime": "2016-08-02T21:25:00-05:00"
      }
    ]
  },
  {
    "title": "Café Society",
    "id": "192162",
    "showtimes": [
      {
        "datetime": "2016-08-02T11:35:00-05:00"
      },
      {
        "datetime": "2016-08-02T14:10:00-05:00"
      },
      {
        "datetime": "2016-08-02T16:45:00-05:00"
      },
      {
        "datetime": "2016-08-02T19:15:00-05:00"
      },
      {
        "datetime": "2016-08-02T21:45:00-05:00"
      }
    ]
  },
  {
    "title": "Ghostbusters 3D",
    "id": "140163",
    "showtimes": [
      {
        "datetime": "2016-08-02T12:05:00-05:00"
      },
      {
        "datetime": "2016-08-02T18:10:00-05:00"
      }
    ]
  },
  {
    "title": "Ghostbusters (2016)",
    "id": "140163",
    "showtimes": [
      {
        "datetime": "2016-08-02T13:20:00-05:00"
      },
      {
        "datetime": "2016-08-02T16:20:00-05:00"
      },
      {
        "datetime": "2016-08-02T19:20:00-05:00"
      },
      {
        "datetime": "2016-08-02T22:05:00-05:00"
      }
    ]
  },
  {
    "title": "Hillary's America: The Secret History of the Democratic Party",
    "id": "193778",
    "showtimes": [
      {
        "datetime": "2016-08-02T12:50:00-05:00"
      },
      {
        "datetime": "2016-08-02T15:40:00-05:00"
      },
      {
        "datetime": "2016-08-02T18:35:00-05:00"
      },
      {
        "datetime": "2016-08-02T21:35:00-05:00"
      }
    ]
  },
  {
    "title": "The Infiltrator",
    "id": "191461",
    "showtimes": [
      {
        "datetime": "2016-08-02T15:05:00-05:00"
      },
      {
        "datetime": "2016-08-02T21:20:00-05:00"
      }
    ]
  },
  {
    "title": "Captain Fantastic",
    "id": "190420",
    "showtimes": [
      {
        "datetime": "2016-08-02T13:30:00-05:00"
      },
      {
        "datetime": "2016-08-02T16:35:00-05:00"
      },
      {
        "datetime": "2016-08-02T19:25:00-05:00"
      },
      {
        "datetime": "2016-08-02T22:15:00-05:00"
      }
    ]
  },
  {
    "title": "Mike & Dave Need Wedding Dates",
    "id": "188459",
    "showtimes": [
      {
        "datetime": "2016-08-02T12:55:00-05:00"
      },
      {
        "datetime": "2016-08-02T15:30:00-05:00"
      },
      {
        "datetime": "2016-08-02T18:20:00-05:00"
      },
      {
        "datetime": "2016-08-02T21:10:00-05:00"
      }
    ]
  },
  {
    "title": "The Secret Life of Pets",
    "id": "184804",
    "showtimes": [
      {
        "datetime": "2016-08-02T11:15:00-05:00"
      },
      {
        "datetime": "2016-08-02T12:15:00-05:00"
      },
      {
        "datetime": "2016-08-02T13:45:00-05:00"
      },
      {
        "datetime": "2016-08-02T14:45:00-05:00"
      },
      {
        "datetime": "2016-08-02T16:15:00-05:00"
      },
      {
        "datetime": "2016-08-02T18:45:00-05:00"
      },
      {
        "datetime": "2016-08-02T19:50:00-05:00"
      },
      {
        "datetime": "2016-08-02T21:15:00-05:00"
      }
    ]
  },
  {
    "title": "The BFG",
    "id": "188457",
    "showtimes": [
      {
        "datetime": "2016-08-02T13:55:00-05:00"
      },
      {
        "datetime": "2016-08-02T16:55:00-05:00"
      }
    ]
  },
  {
    "title": "The Legend of Tarzan",
    "id": "187791",
    "showtimes": [
      {
        "datetime": "2016-08-02T12:45:00-05:00"
      },
      {
        "datetime": "2016-08-02T15:35:00-05:00"
      },
      {
        "datetime": "2016-08-02T18:30:00-05:00"
      },
      {
        "datetime": "2016-08-02T21:10:00-05:00"
      }
    ]
  },
  {
    "title": "Independence Day: Resurgence",
    "id": "165895",
    "showtimes": [
      {
        "datetime": "2016-08-02T16:50:00-05:00"
      },
      {
        "datetime": "2016-08-02T22:10:00-05:00"
      }
    ]
  },
  {
    "title": "The Shallows",
    "id": "185717",
    "showtimes": [
      {
        "datetime": "2016-08-02T21:50:00-05:00"
      }
    ]
  },
  {
    "title": "Central Intelligence",
    "id": "185755",
    "showtimes": [
      {
        "datetime": "2016-08-02T17:15:00-05:00"
      },
      {
        "datetime": "2016-08-02T22:15:00-05:00"
      }
    ]
  },
  {
    "title": "Finding Dory",
    "id": "164333",
    "showtimes": [
      {
        "datetime": "2016-08-02T11:05:00-05:00"
      },
      {
        "datetime": "2016-08-02T13:40:00-05:00"
      },
      {
        "datetime": "2016-08-02T16:30:00-05:00"
      },
      {
        "datetime": "2016-08-02T19:05:00-05:00"
      }
    ]
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <MoviesList data={MOVIES} />
      </div>
    );
  }
}

export default App;
