import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../flats.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0]
      flats
    };
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }


  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render () {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
