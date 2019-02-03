import React, { Component } from 'react';
import './index.css';

import MenuBar from './MenuBar.js';
import TitleBlock from './TitleBlock.js';
import Mission from './Mission.js';

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <TitleBlock />
        <Mission />
      </div>
    );
  }
}

export default App;
