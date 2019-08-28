import React, { Component } from 'react';

export default class SimpleState extends Component {
  
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        The count is: {this.state.count}
        <button
          onClick={() => this.setState({ count: this.state.count +1 })}
        >
          Increase Account
        </button>
      </div>
    );
  }
}