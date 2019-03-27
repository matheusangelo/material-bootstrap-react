import React, { Component } from 'react';
import { Container, Col, Row, Button, Card, CardBody, CardHeader, Table } from 'reactstrap';


class PaginaInicial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "react",
            valor: 0,
            data: []
        }
    }

    deletar = () => {
        this.setState({ titulo: "oi" });
    };

    mostrar = () => {
        let vetor = this.state.data;
        vetor = [];
        alert(vetor.length);
    }


    render() {
        return (
            <div>
                <Container className="mt-2">
                    <Row className="text-left">
                        <Col>
                            <Card>
                                <CardHeader>
                                    <b>Prontuário</b>
                                </CardHeader>
                                <CardBody className="bordered">
                                    <Row className="mt-2">
                                        <Col xs="1">
                                            Nome:
                                        </Col>
                                        <Col xs="11">
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Nome do Paciente" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col xs="1">
                                            Sexo:
                                        </Col>
                                        <Col xs="3">
                                            <select className="form-control">
                                                <option>Selecione...</option>
                                                <option>Masculino</option>
                                                <option>Feminino</option>
                                            </select>
                                        </Col>
                                        <Col xs="2">
                                            Sintomas:
                                        </Col>
                                        <Col xs="6">
                                            <select className="form-control">
                                                <option>Selecione...</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col xs="2">
                                            Intensidade:
                                        </Col>
                                        <Col xs="3">
                                            <select className="form-control">
                                                <option>Selecione...</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col xs="2">
                                            Observações:
                                        </Col>
                                        <Col xs="10">
                                            <textarea className="form-control" rows="10"></textarea>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="text-right mt-3">
                        <Col>
                            <Button color="primary" className="mb-3" onClick={() => this.mostrar()}>Processar</Button>
                        </Col>
                    </Row>
                    <Card>
                        <CardHeader className="text-left">
                            Resultados:
                        </CardHeader>
                        <CardBody>
                            <Row >
                                <Col>
                                    <Row className="text-left ml-2">Pytorch</Row>
                                    <Row>
                                        <Table className="striped">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Codigo</th>
                                                    <th scope="col">Descrição</th>
                                                    <th scope="col">Probabilidade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        1
                                        </td>
                                                    <td>
                                                        1
                                        </td>
                                                    <td>
                                                        Câncer
                                        </td>
                                                    <td>
                                                        90 %
                                        </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        1
                                        </td>
                                                    <td>
                                                        1
                                        </td>
                                                    <td>
                                                        Câncer
                                        </td>
                                                    <td>
                                                        90 %
                                        </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Row>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <Row className="text-left ml-2">TensorFlow</Row>
                                    <Row>
                                        <Table className="striped">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Codigo</th>
                                                    <th scope="col">Descrição</th>
                                                    <th scope="col">Probabilidade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        1
                                        </td>
                                                    <td>
                                                        1
                                        </td>
                                                    <td>
                                                        Câncer
                                        </td>
                                                    <td>
                                                        90 %
                                        </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        1
                                        </td>
                                                    <td>
                                                        1
                                        </td>
                                                    <td>
                                                        Câncer
                                        </td>
                                                    <td>
                                                        90 %
                                        </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Row>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>
            </div>

        )
    }

}
export default PaginaInicial;
