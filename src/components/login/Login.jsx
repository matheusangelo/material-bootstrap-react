import React, { Component } from 'react'
import { Container, Row, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "teste"
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link text-white"><b>TCC 2019 - Tensorflow x Pytorch </b></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Container className="mb-5">
                    <Row className="mt-5">
                        <div className="col-6 mx-auto">
                            <Card>
                                <CardBody>
                                    <h5 className="card-title text-center mb-3">Login</h5>
                                    <form className="form-signin">
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" className="form-control" placeholder="Usuário" required autofocus />
                                        </div>
                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required />
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label mt-2" for="customCheck1">Lembrar senha</label>
                                            <button className="btn btn-lg btn-success btn-block text-uppercase mr-3 mt-3" type="submit"> Entrar</button>
                                        </div>
                                        <hr className="my-4" />
                                        <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Cadastrar</button>
                                        <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i>Esqueci a senha</button>
                                    </form>
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