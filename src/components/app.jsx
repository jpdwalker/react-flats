import React, { Component } from 'react';
import Flat from './flat.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 48.884211,
      lng: 2.34689
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
