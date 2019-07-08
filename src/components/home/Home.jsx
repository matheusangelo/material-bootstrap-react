import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBarTopo from '../navbar/navbarAdmin'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "titulo": "Instruções"
        }
    }

    render() {
        return (
            <div>
                <NavBarTopo/>
                <Jumbotron>
                    <h1 className="display-3">Bem-vindo!</h1>
                    <p className="lead">Utilização de Pytorch x Tensorflow no diagnótiscos de doenças oculares.</p>
                    <hr className="my-2" />
                    <p>Trabalho de conclusão de curso - 2019</p>
                    <p className="lead">
                        <Link to = "/master/consulta" className="btn btn-primary">Iniciar</Link>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}
export default Home;