import React, { Component } from 'react';
import { Container, Col, Row, Button, Card, CardBody, CardHeader, Table } from 'reactstrap';


let mock_resultados = [
    {
        "id": "1",
        "codigo": 1,
        "descricao": "Câncer",
        "probabilidade": 90,
    },
    {
        "id": "2",
        "codigo": 2,
        "descricao": "Câncer",
        "probabilidade": 90,
    },
    {
        "id": "3",
        "codigo": 3,
        "descricao": "Câncer",
        "probabilidade": 90,
    },
    {
        "id": "4",
        "codigo": 4,
        "descricao": "Câncer",
        "probabilidade": 90,
    },
    {
        "id": "5",
        "codigo": 5,
        "descricao": "Câncer",
        "probabilidade": 90,
    },
]

let mock_pacientes = [
    {
        "id": "1",
        "nome": "Matheus",
        "idade": "27",
        "prioridade": "Alta",
        "status": "OK"
    },
    {
        "id": "2",
        "nome": "Marcos",
        "idade": "27",
        "prioridade": "Alta",
        "status": "OK"
    },
    {
        "id": "3",
        "nome": "Lucas",
        "idade": "27",
        "prioridade": "Alta",
        "status": "OK"
    },
    {
        "id": "4",
        "nome": "Judas",
        "idade": "27",
        "prioridade": "Alta",
        "status": "OK"
    },
    {
        "id": "5",
        "nome": "Thiago",
        "idade": "27",
        "prioridade": "Alta",
        "status": "OK"
    },
    {
        "id": "6",
        "nome": "Pedro",
        "idade": "27",
        "prioridade": "Alta",
        "status": "OK"
    },
    {
        "id": "7",
        "nome": "Paulo",
        "idade": "27",
        "prioridade": "Alta",
        "status": "OK"
    },
]


class Resultados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: mock_resultados,
            pacientes: mock_pacientes,
        }
    }

    render() {
        return (
            <Container>
                <Row className="mt-5">
                    <Col>
                        <Card>
                            <CardHeader className="text-left">
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
                                        <Button>Buscar</Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
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
            </Container>
        )
    }

}
export default Resultados;