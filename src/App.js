import React, { Component } from 'react';
import './App.css';
import PaginaInicial from './components/Inicial/Inicial';
import NavBarTopo  from './components/navbar/topo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBarTopo></NavBarTopo>
        </header>
        <PaginaInicial/>
      </div>
    );
  }
}

export default App;
