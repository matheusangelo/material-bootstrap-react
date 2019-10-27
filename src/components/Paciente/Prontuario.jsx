import React, { Component, useEffect, useState } from 'react';
import { Container, Col, Row, Button, Card, CardBody, CardHeader, Table } from 'reactstrap';
import { MDBInput } from 'mdbreact';
import requisicaoPacientes, { gerenciarSintomas, finalizarCadastro, value } from './index'
import NavBarTopo from '../navbar/navbarAdmin';
import { Link, useParams } from 'react-router-dom';
import Inputs from './Inputs'

export default function Prontuario(props) {
    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState('')
    const [idade, setIdade] = useState('')
    const [rg, setRG] = useState('')
    const [cpf, setCPF] = useState('')
    const [identificador, setIdentificador] = useState('')
    const [valor, setValor] = useState('')
    const [chave, setChave] = useState('')
    const [sintomas, setSintomas] = useState([])
    const [prontuario, setProntuario] = useState(value);

    useEffect(() => {
        (async () => {
            let { id } = props.match.params;
            if (id) { setProntuario(await requisicaoPacientes('GET', id)) }
        })();
    }, [])

    function sendPropsToSave() {
        finalizarCadastro(prontuario);
    }


    return (
        <div>
            <NavBarTopo />
            <Container className="mt-2 card">
                <Row className="mt-1">
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
                                            value={prontuario.nome}
                                            onChange={(e) => prontuario.nome = e.target.value}
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
                                            value={prontuario.idade}
                                            onChange={(e) => prontuario.idade = e.target.value}
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
                                            value={prontuario.rg}
                                            onChange={(e) => prontuario.rg = e.target.value}
                                            label="RG"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            containerClass="text-left"
                                        />
                                    </Col>
                                    <Col xs="6">
                                        <MDBInput
                                            value={prontuario.cpf}
                                            onChange={(e) => prontuario.cpf = e.target.value}
                                            label="CPF"
                                            group
                                            type="text"
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
                                        <select class="browser-default custom-select"
                                            value={prontuario.sexo}
                                            onChange={(e) => prontuario.sexo = e.target.value}>
                                            <option selected>Selecione...</option>
                                            <option value="1">Masculino</option>
                                            <option value="2">Feminino</option>
                                        </select>
                                    </Col>
                                    <Col xs="4">
                                        <MDBInput
                                            value={prontuario.identificador}
                                            onChange={(e) => prontuario.identificador = e.target.value}
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
                                            value={prontuario.data_atendimento}
                                            onChange={(e) => prontuario.data_atendimento = e.target.value}
                                            label="Data atendimento"
                                            group
                                            type="text"
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
                                                value={prontuario.observacoes}
                                                onChange={(e) => { { prontuario.observacoes = e.target.value } }}
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
                                    <Col xs="12">
                                        <Inputs  inputs={prontuario.inputs}/>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="text-right mt-3">
                    <Col>
                        <Link to="/master/consulta" color="danger" className="btn btn-danger mb-3" onClick={() => setSintomas()}>Voltar</Link>
                        <Button color="primary" className="mb-3" onClick={() => sendPropsToSave()}>Finalizar cadastro</Button>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
