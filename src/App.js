import React, { Component } from 'react';
//import Board from './component/Board'
import BoardWithFirestorter from './component/BoardWithFirestorter'

class App extends Component {
  render() {
    return (
      <div className="container">
        <BoardWithFirestorter /> 
      </div>
    )
  }
}

export default App;
