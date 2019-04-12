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


class PaginaInicial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "react",
            valor: 0,
            data: [],
            resultados: mock_resultados,
            retorno: [],
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

    componentDidMount() {
        try {
            let URL_BASE = "http://127.0.0.1:5000";
            fetch(URL_BASE + '/v1/tensorflow', { method: 'GET', mode: 'cors'}).then((resultado) => {resultado.json().then((dados) => {
                    let retornos = [];
                    if (dados.success === true) {
                        for (let i = 0; i < dados.data.length; i++) {
                            retornos.push({
                                status:dados.data[i].status
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
                </Container>
            </div>

        )
    }

}
export default PaginaInicial;
