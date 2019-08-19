import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Prontuario from './components/paciente/Prontuario';
import ConsultaPaciente from './components/paciente/ConsultaPaciente';
import Resultados from './components/resultados/Resultados';
import CadastroDoencas from './components/doencas/CadastroDoencas'
import Footer from './components/footer/Footer';
import Login from './components/login/login'
import Home from './components/home/Home'
import CadastroLogin from './components/login/novo-login';

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <div className="main-container mb-5" style={{ "align": "center" }}>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/novo" exact component={CadastroLogin} />
              <Route path="/convencional/home" exact component={Home} />
              <Route path="/master/home" exact component={Home} />
              <Route path="/master/consulta" exact component={ConsultaPaciente} />
              <Route path="/master/prontuario" exact component={Prontuario} />
              <Route path="/master/resultados" exact component={Resultados} />
              <Route path="/master/doencas" exact component={CadastroDoencas} />
              <Route path="/convencional/consulta" exact component={ConsultaPaciente} />
              <Route path="/convencional/prontuario" exact component={Prontuario} />
              <Route path="/convencional/resultados" exact component={Resultados} />
            </Switch>
          </div>
        </div>
        <div className="footer text-center">
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
