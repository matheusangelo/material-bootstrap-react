import React, { Component } from 'react';
import { Container, Col, Row, Button, Card, CardBody, CardHeader, Table } from 'reactstrap';
import NavBarTopo from '../navbar/navbarAdmin'
import {pacientes,resultados} from './index'


class Resultados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: resultados,
            pacientes: pacientes,
            exibir: false,
        }
    }

    buscarResultado = () => {
        this.setState({ exibir: true })
    }

    get RetornarRelatorios() {
        return (
            <Row className="mt-5">
                <Col>
                    <Card>
                        <CardHeader className="text-left">
                            <b>Resultados:</b>
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
                                                {this.state.resultados.map((resultado, i) => {
                                                    return (
                                                        <tr>
                                                            <td>{resultado.id}</td>
                                                            <td>{resultado.codigo}</td>
                                                            <td>{resultado.descricao}</td>
                                                            <td>{resultado.probabilidade}%</td>
                                                        </tr>
                                                    )
                                                })}
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
                                                {this.state.resultados.map((resultado, i) => {
                                                    return (
                                                        <tr>
                                                            <td>{resultado.id}</td>
                                                            <td>{resultado.codigo}</td>
                                                            <td>{resultado.descricao}</td>
                                                            <td>{resultado.probabilidade}%</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </Row>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }

    render() {
        return (
            <>
                <NavBarTopo />
                <Container>
                    <Row className="mt-5">
                        <Col>
                            <Card className="text-white mt-2">
                                <CardHeader className="text-left bg-primary">
                                    <b>Consulta:</b>
                                </CardHeader>
                                <CardBody>
                                    <Row className="text-left">
                                        <Col>
                                            Pacientes:
                                        <select className="form-control mt-2">
                                                <option>Selecione...</option>
                                                {this.state.pacientes.map((paciente, i) => {
                                                    return (
                                                        <option>{paciente.nome}</option>
                                                    )
                                                })}
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="text-right mt-2">
                                        <Col>
                                            <Button onClick={this.buscarResultado}>Buscar</Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    {this.state.exibir === true ? this.RetornarRelatorios : false}
                </Container>
            </>
        )
    }

}
export default Resultados;