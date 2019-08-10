import React, { Component } from 'react';
import { Container, Col, Row, Button, Card, CardBody, CardHeader, Table } from 'reactstrap';
import { URL_BASE } from '../../include/base';
import { IoIosClose } from 'react-icons/io';
import NavBarTopo from '../navbar/navbarAdmin'

class CadastroDoencas extends Component {
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
            let url = URL_BASE + "/v1/pacientes";
            fetch(url + '/', { method: 'GET', mode: 'cors' }).then((resultado) => {
                resultado.json().then((dados) => {
                    let retornos = [];
                    for (let i = 0; i < dados[0].length; i++) {
                        retornos.push({
                            id: dados[0][i]._id,
                            nome: dados[0][i].nome,
                            idade: dados[0][i].idade,
                            prioridade: dados[0][i].prioridade,
                            status: dados[0][i].status
                        })
                        this.setState({
                            pacientes: retornos
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
                <NavBarTopo/>
                <Container className="mt-2 card">
                    <Row className="mt-2">
                        <Col><h5>Carga Doenças:</h5></Col>
                        <div className="row justify-content-center">
                            <div className="col">
                                <hr className="divider" />
                            </div>
                        </div>
                    </Row>
                    <Row className="text-left">
                        <Col>
                            <Card>
                                <CardHeader>
                                    <b>Ficha de Cadastro</b>
                                </CardHeader>
                                <CardBody className="bordered">
                                    <Row className="mt-2">
                                        <Col xs="11">
                                            Nome:
                                            <input type="text"
                                                className="form-control"
                                                placeholder="Nome da Doença" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col xs="6">
                                            Sintomas
                                            <input type="text" className="form-control"></input>
                                        </Col>
                                        <Col xs="3">
                                            Grau:
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
                    <Row>
                        <Col>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Sintomas</th>
                                        <th>Grau</th>
                                        <th>Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Catarata</td>
                                        <td>Visão Embaçada</td>
                                        <td>5</td>
                                        <td><h3><IoIosClose color="red" /></h3></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }

}
export default CadastroDoencas;
