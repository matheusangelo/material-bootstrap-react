import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                <Jumbotron>
                    <h1 className="display-3">Bem-vindo!</h1>
                    <p className="lead">Utilização de Pytorch x Tensorflow no diagnótiscos de doenças oculares.</p>
                    <hr className="my-2" />
                    <p>Trabalho de conclusão de curso - 2019</p>
                    <p className="lead">
                        <Link to = "/consulta" className="btn btn-primary">Iniciar</Link>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}
export default Home;