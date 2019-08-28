import React from 'react';

export default class SimpleCoordinates extends React.Component {

  state = {
    latitude: null,
    longitude: null
  };

  render() {
    return this.state.latitude == null ? (
      <div>Loading...</div>
    ) : (
      <div>
        <h2>Latitude: {this.state.latitude}</h2>
        <h2>Latitude: {this.state.longitude}</h2>
      </div>
    );
  }

  componentDidMount() {
    this.geoId = window.navigator.geolocation.watchPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.geoId);
  }
}