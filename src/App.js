import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Prontuario from './components/Paciente/Prontuario';
import ConsultaPaciente from './components/Paciente/ConsultaPaciente';
import Resultados from './components/resultados/Resultados';
import NavBarTopo from './components/navbar/topo';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarTopo />
        <div className="main-container" style={{ "align": "center" }}>
          <Switch>
            <Route path="/" exact component={ConsultaPaciente} />
            <Route path="/prontuario" exact component={Prontuario} />
            <Route path="/resultados" exact component={Resultados} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
