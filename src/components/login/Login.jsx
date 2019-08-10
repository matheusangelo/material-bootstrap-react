import React, { Component } from 'react'
import { Container, Row, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { Autenticacao } from './Autenticacao.js';
import Redirect from 'react-router-dom/Redirect';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            permissao: false
        }
    }

    validarCampos = (e) => {
        let login = {
            login: this.state.email,
            senha: this.state.senha
        }
        let permissao = Autenticacao(login)
        this.renderRedirect(permissao)
    }

    renderRedirect = (redirect) => {
        this.setState({
            permissao: redirect
        })
    }

    handleChange = (e) => {
        let mudanca = {}
        mudanca[e.target.name] = e.target.value;
        this.setState(mudanca)
    }

    render() {
        if (this.state.permissao) {
            return <Redirect to="/home" />
        }
        return (
            <div>
                <MDBNavbar color="indigo" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">DiagnosticIA</strong>
                    </MDBNavbarBrand>
                </MDBNavbar>
                <Container className="mb-5">
                    <Row className="mt-5">
                        <div className="col-6 mx-auto">
                            <br />
                            <br />
                            <Card className="login">
                                <CardBody>
                                    <h5 className="card-title text-center mb-3">Login</h5>
                                    <div className="form-signin">
                                        <div className="form-label-group">
                                            <input type="email"
                                                id="inputEmail"
                                                className="form-control"
                                                name="email"
                                                placeholder="Usuário"
                                                required
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                autofocus />
                                        </div>
                                        <div className="form-label-group">
                                            <input type="password"
                                                id="inputPassword"
                                                className="form-control"
                                                placeholder="Senha"
                                                name="senha"
                                                value={this.state.senha}
                                                onChange={this.handleChange}
                                                required />
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox"
                                                className="custom-control-input"
                                                id="customCheck1" />
                                            <label className="custom-control-label mt-2" for="customCheck1">Lembrar senha</label>
                                            <button className="btn btn-lg btn-success btn-block text-uppercase mr-3 mt-3"
                                                type="button"
                                                onClick={() => this.validarCampos()}> Entrar</button>
                                        </div>
                                        <hr className="my-4" />
                                        <button className="btn btn-lg btn-block text-uppercase" type="submit"> Cadastrar</button>
                                        <button className="btn btn-lg btn-block text-uppercase" type="submit">Esqueci a senha</button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Login;