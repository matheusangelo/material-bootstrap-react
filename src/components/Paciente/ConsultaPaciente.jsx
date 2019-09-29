import React, { Component, useEffect, useState } from 'react';
import { Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MDBContainer, MDBBtn, MDBCol, MDBCardBody, MDBCardImage, MDBCard, MDBCardTitle, MDBCardText, MDBRow } from 'mdbreact';
import requisicaoPacientes from './index'
import {retornarNãoProcessados} from './index'
import { Card, CardBody, CardHeader } from 'reactstrap'

import NavBarTopo from '../navbar/navbarAdmin'


export default function ConsultaPaciente() {
    const [pacientes, setPacientes] = useState([])
    const [naoProcessados, setNaoProcessados] = useState([])
    const [atendimento, setAtendimento] = useState([])
    const [exibicaoModal, setExibicaoModal] = useState(false)
    const [idExclusao, setIdExclusao] = useState("")

    useEffect(async () => {
        setExibicaoModal(false);
        setPacientes(await requisicaoPacientes('GET'));
    }, [])

    useEffect(async () => {
        setPacientes(await requisicaoPacientes('GET'));
    }, [exibicaoModal])

    function toggleExclusao(id) {
        setIdExclusao(id);
        setExibicaoModal(true);
    }

    return (
        <>
            <div>
                <NavBarTopo />
                <div className="mt-3 ml-3 mr-3">
                    <MDBRow>
                        <MDBCol>
                            <MDBCard className=" bg-danger">
                                <MDBCardBody>
                                    <MDBCardTitle className="text-white">Não Processados</MDBCardTitle>
                                    <MDBCardText className="text-white">
                                        {naoProcessados}
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className=" bg-primary">
                                <MDBCardBody className="text-white">
                                    <MDBCardTitle>Totais</MDBCardTitle>
                                    <MDBCardText className="text-white">
                                    {naoProcessados}
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className=" bg-success">
                                <MDBCardBody>
                                    <MDBCardTitle className="text-white">  Atendimento</MDBCardTitle>
                                    <MDBCardText className="text-white">
                                    {naoProcessados}
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>

                </div>
                <MDBContainer fluid className="mt-5" >
                    <Card className="text-white mt-2">
                        <CardHeader className=" bg-primary">
                            Pacientes
                    </CardHeader>
                        <Table bordered striped hover responsive className="table-responsive-md btn-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Idade</th>
                                    <th>Prioridade</th>
                                    <th>Status</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pacientes.map((paciente, i) => {
                                    return (
                                        <tr>
                                            <td>{i}</td>
                                            <td>{paciente.nome}</td>
                                            <td>{paciente.idade}</td>
                                            <td>{paciente.prioridade}</td>
                                            <td>{paciente.status}</td>
                                            <td>
                                                <MDBBtn className="btn btn-indigo btn-md m-0" onClick={() => alert("oi")}>Processar</MDBBtn>
                                                <MDBBtn className="ml-2 btn-md" color="primary" onClick={async () => await requisicaoPacientes('GET', paciente._id)}>Editar</MDBBtn>
                                                <MDBBtn className="ml-2 btn-md" color="danger" onClick={() => toggleExclusao(paciente._id)}>Excluir</MDBBtn>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Card>
                </MDBContainer>
                <Modal isOpen={exibicaoModal} toggle={exibicaoModal} className={"danger"}>
                    <ModalHeader toggle={exibicaoModal}>Exclusão paciente</ModalHeader>
                    <ModalBody>
                        Deseja realizar a exclusão do paciente ?
                </ModalBody>
                    <ModalFooter>
                        <MDBBtn color="danger" onClick={async () => setExibicaoModal(await requisicaoPacientes('DELETE', idExclusao))}>Excluir</MDBBtn>{' '}
                        <MDBBtn color="primary" onClick={() => setExibicaoModal(false)}>Cancelar</MDBBtn>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}
