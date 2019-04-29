import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

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
                        <Button color="primary">Iniciar</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}
export default Home;