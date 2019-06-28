import React, { Component } from 'react';
import Flat from './flat.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0].
    };
  }

  render () {
    return (
      <div>
        <div className="flat-list">

        </div>
        <div className="map-container">

        </div>
      </div>
    );
  }
}

export default App;
