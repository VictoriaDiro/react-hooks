import React, { Component } from 'react';
import SimpleState from '../SimpleState/index';
import SimpleStateHooks from '../SimpleStateHooks/index';
import SimpleCoordinates from '../SimpleCoordinates';
import Coordinates from '../SimpleCoordinatesHooks';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleState />
        <SimpleStateHooks />
        <SimpleCoordinates />
        <Coordinates />
      </div>
    );
  }
}

export default App;
