import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Prontuario from './components/paciente/Prontuario';
import ConsultaPaciente from './components/paciente/ConsultaPaciente';
import Resultados from './components/resultados/Resultados';
import Footer from './components/footer/Footer';
import Login from './components/login/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container" style={{ "align": "center" }}>
          <Switch>
          <Route path="/" exact component={Login} />
            <Route path="/consulta" exact component={ConsultaPaciente} />
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
