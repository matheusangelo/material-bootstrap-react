import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import PaginaInicial from './components/Inicial/Inicial';
import NavBarTopo from './components/navbar/topo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBarTopo></NavBarTopo>
        </header>
        <div className="main-container" style={{ "align": "center" }}>
           <Switch>
            <Route path="/" exact component={PaginaInicial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
