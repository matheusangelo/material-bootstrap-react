import React, { Component } from 'react';
import { Container, Col, Row, Button, Card, CardBody, CardHeader} from 'reactstrap';
import { URL_BASE } from '../../include/base'


class Prontuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "Prontuário",
            valor: 0,
            data: [],
            retorno: [],
        }
    }

    deletar = () => {
        this.setState({ titulo: "oi" });
    };

    cadastrar = () => {
        let vetor = this.state.data;
        vetor = [];
        alert(vetor.length);
    }

    componentDidMount() {
        try {
            let URL_BASE = URL_BASE +"/v1/pacientes";
            fetch(URL_BASE + '/', { method: 'GET', mode: 'cors' }).then((resultado) => {
                resultado.json().then((dados) => {
                    let retornos = [];
                    if (dados.success === true) {
                        for (let i = 0; i < dados.data.length; i++) {
                            retornos.push({
                                status: dados.data[i].status
                            })
                        }
                        console.log(retornos)
                        this.setState({
                            retorno: retornos
                        });
                    }
                })
            })
        }
        catch (e) {
            console.log(e)
        }
    }


    render() {
        return (
            <div>
                <Container className="mt-2">
                    <Row className="text-left">
                        <Col>
                            <Card>
                                <CardHeader>
                                    <b>{this.state.titulo}</b>
                                </CardHeader>
                                <CardBody className="bordered">
                                    <Row className="mt-2">
                                        <Col xs="11">
                                            Nome:
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Nome do Paciente" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col xs="3">
                                            Sexo:
                                            <select className="form-control">
                                                <option>Selecione...</option>
                                                <option>Masculino</option>
                                                <option>Feminino</option>
                                            </select>
                                        </Col>
                                        <Col xs="6">
                                            Sintomas:
                                            <select className="form-control">
                                                <option>Selecione...</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col xs="3">
                                            Intensidade:
                                            <select className="form-control">
                                                <option>Selecione...</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col xs="12">
                                            Observações:
                                            <textarea className="form-control" rows="10"></textarea>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="text-right mt-3">
                        <Col>
                            <Button color="primary" className="mb-3" onClick={() => this.cadastrar()}>Cadastrar</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }

}
export default Prontuario;
