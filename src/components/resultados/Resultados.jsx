import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, Card, CardBody, CardHeader, Table } from 'reactstrap';
import NavBarTopo from '../navbar/navbarAdmin'
import requisicaoPacientes, { finalizarCadastro } from './index'


export default function Resultados() {
    const [exibir, setExibir] = useState(false);
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPacienteSelecionado] = useState([]);

    useEffect(() => {
        (async () => {
            setPacientes(await requisicaoPacientes('GET'))
        })()
    }, [])

    function handleChange(value) {
        setExibir(false);
        setPacienteSelecionado(pacientes.filter(x => x.nome == value));
    }

    function buscarResultado() {
        setExibir(true);
    }

    function RetornarRelatorios() {
        return (
            <Container className="mt-5">
                <Col>
                    <Row >
                        <Col>
                            <Row>
                                <Table className="striped text-center">
                                    <thead className="table-primary">
                                        <tr>
                                            <th scope="col">Descrição</th>
                                            <th scope="col">Classificação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paciente.map((resultado, i) => {
                                            return (
                                                <tr>
                                                    <td>{resultado.nome}</td>
                                                    <td>{resultado.status == false ? resultado.resultado : "Os dados ainda não foram processados"}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Container>
        )
    }

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
                                        <select className="form-control mt-2" onClick={(e) => { handleChange(e.target.value) }}>
                                            <option>Selecione...</option>
                                            {pacientes.map((paciente, i) => {
                                                return (
                                                    <option value={paciente.id}>{paciente.nome}</option>
                                                )
                                            })}
                                        </select>
                                    </Col>
                                </Row>
                                <Row className="text-right mt-2">
                                    <Col>
                                        <Button onClick={() => { buscarResultado() }}>Buscar</Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {exibir === true ? RetornarRelatorios() : false}
            </Container>
        </>
    )

}