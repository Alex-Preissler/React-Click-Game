import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <span>Clicky Game</span>
          <ClickResponse></ClickResponse>
          <Score></Score>
        </div>
        <div>
          <Billboard></Billboard>
        </div>
        <div>
          <div>
            <ClickItems></ClickItems>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
