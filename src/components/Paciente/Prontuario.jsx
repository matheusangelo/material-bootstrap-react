import React, { Component, useEffect, useState } from 'react';
import { Container, Col, Row, Button, Card, CardBody, CardHeader, Table } from 'reactstrap';
import { MDBInput } from 'mdbreact';
import { IoIosClose } from 'react-icons/io';
import requisicaoPacientes, { gerenciarSintomas } from './index'
import NavBarTopo from '../navbar/navbarAdmin';


export default function Prontuario() {
    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState('')
    const [idade, setIdade] = useState('')
    const [intensidade, setIntensidade] = useState('')
    const [observacoes, setObservacoes] = useState('')
    const [prioridade, setPrioridade] = useState('')
    const [status, setStatus] = useState(false)
    const [paciente, setPaciente] = useState('')
    const [sintoma, setSintoma] = useState('')
    const [sintomas, setSintomas] = useState([])

    useEffect(() => {

    }, [])

    function callbackSintomas() {
        setSintomas(gerenciarSintomas(0, sintoma, intensidade, sintomas))
    }

    return (
        <div>
            <NavBarTopo />
            <Container className="mt-2 card">
                <Row className="mt-2">
                    <Col><h5>Pacientes:</h5></Col>
                    <div className="row justify-content-center">
                        <div className="col">
                            <hr className="divider" />
                        </div>
                    </div>
                </Row>
                <Row className="text-left">
                    <Col>
                        <Card>
                            <CardHeader className=" bg-primary text-white">
                                <b>Informações do Paciente</b>
                            </CardHeader>
                            <CardBody className="bordered">
                                <Row className="mt-2">
                                    <Col xs="10">
                                        <MDBInput
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                            label="Nome do paciente"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                            containerClass="text-left"
                                        />
                                    </Col>
                                    <Col xs="2">
                                        <MDBInput
                                            value={idade}
                                            onChange={(e) => setIdade(e.target.value)}
                                            label="Idade"
                                            group
                                            type="number"
                                            validate
                                            error="wrong"
                                            success="right"
                                            containerClass="text-left"
                                        />
                                    </Col>
                                </Row>
                                <Row className="mt-8">
                                    <Col xs="6">
                                        <MDBInput
                                            value={idade}
                                            onChange={(e) => setIdade(e.target.value)}
                                            label="RG"
                                            group
                                            type="number"
                                            validate
                                            error="wrong"
                                            success="right"
                                            containerClass="text-left"
                                        />
                                    </Col>
                                    <Col xs="6">
                                        <MDBInput
                                            value={idade}
                                            onChange={(e) => setIdade(e.target.value)}
                                            label="CPF"
                                            group
                                            type="number"
                                            validate
                                            error="wrong"
                                            success="right"
                                            containerClass="text-left"
                                        />
                                    </Col>
                                </Row>
                                <Row className="mt-8">
                                    <Col xs="6">
                                        Sexo:
                                        <select class="browser-default custom-select">
                                            <option selected>Selecione...</option>
                                            <option value="1">Masculino</option>
                                            <option value="2">Feminino</option>
                                        </select>
                                    </Col>
                                    <Col xs="4">
                                        <MDBInput
                                            value={idade}
                                            onChange={(e) => setIdade(e.target.value)}
                                            label="Identificador"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            containerClass="text-left"
                                        />
                                    </Col>
                                    <Col xs="2">
                                        <MDBInput
                                            value={idade}
                                            onChange={(e) => setIdade(e.target.value)}
                                            label="Data atendimento"
                                            group
                                            type="date"
                                            validate
                                            error="wrong"
                                            success="right"
                                            containerClass="text-left"
                                        />
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col xs="12">
                                        <div class="form-group shadow-textarea">
                                            <label for="exampleFormControlTextarea6">Observações:</label>
                                            <textarea
                                                class="form-control z-depth-1"
                                                id="exampleFormControlTextarea6"
                                                rows="3"
                                                placeholder="Insira informações extras sobre o paciente..."></textarea>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="text-left mt-5">
                    <Col>
                        <Card>
                            <CardHeader className=" bg-primary text-white">
                                <b>Avaliação</b>
                            </CardHeader>
                            <CardBody className="bordered">
                                <Row className="mt-4">
                                    <Col xs="9">
                                        Sintomas:
                                        <select class="browser-default custom-select" value={sintoma} onChange={(e) => setSintoma(e.target.value)}>
                                            <option selected>Selecione...</option>
                                            <option value="1">Inserir map das sintomas</option>
                                        </select>
                                    </Col>
                                    <Col xs="3">
                                        <MDBInput
                                            value={intensidade}
                                            onChange={(e) => setIntensidade(e.target.value)}
                                            label="Intensidade"
                                            group
                                            type="number"
                                            validate
                                            error="wrong"
                                            success="right"
                                            containerClass="text-left"
                                        />
                                    </Col>
                                </Row>
                                <Row className="text-right mt-3">
                                    <Col>
                                        <Button color="primary" className="mb-3" onClick={() => callbackSintomas()}>Cadastrar</Button>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col>
                                        <Table bordered className="text-center">
                                            <thead>
                                                <tr >
                                                    <th>Sintomas</th>
                                                    <th>Intensidade</th>
                                                    <th>Ação</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sintomas.map((sintoma, i) => {
                                                    return (
                                                        <tr>
                                                            <td>{sintoma.sintoma}</td>
                                                            <td>{sintoma.intensidade}</td>
                                                            <td><h3>
                                                                <IoIosClose color="red" onClick={() => setSintomas(
                                                                    gerenciarSintomas(i,
                                                                        sintoma.sintoma,
                                                                        sintoma.intensidade,
                                                                        sintomas,
                                                                        false))} />
                                                            </h3></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="text-right mt-3">
                    <Col>
                        <Button color="danger" className="mb-3" onClick={() => setSintomas()}>Voltar</Button>
                        <Button color="primary" className="mb-3" onClick={() => setSintomas()}>Finalizar cadastro</Button>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
