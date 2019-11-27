import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Prontuario from './components/paciente/Prontuario';
import ConsultaPaciente from './components/paciente/ConsultaPaciente';
import Resultados from './components/resultados/Resultados';
import Footer from './components/footer/Footer';
import Login from './components/login/login'
import Home from './components/home/Home'
import CadastroLogin from './components/login/novo-login';
import { verificarAcessoPorPerfil } from './components/login/index'

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <div className="main-container mb-5" style={{ "align": "center" }}>
            <Switch>
              {verificarAcessoPorPerfil() ? true : <h3 className="autorizacao">401 - Não Autorizado</h3>}
              {/* <Route path="/" exact component={Login} /> */}
              {/* <Route path="/novo" exact component={CadastroLogin} /> */}
              {/* <Route path="/master/home" exact component={Home} /> */}
              {/* <Route path="/master/consulta" exact component={ConsultaPaciente} /> */}
              <Route path="/" exact component={Home} />
              <Route path="/prontuario" exact component={Prontuario} />
              <Route path="/resultados/:nome/:resultado" exact component={Resultados} />
              <Route path="*" component={() => <h3 className="autorizacao">404 - Page not found</h3>} />
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
