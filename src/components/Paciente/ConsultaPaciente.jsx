import React, { Component, useEffect, useState } from 'react';
import { Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MDBContainer, MDBBtn } from 'mdbreact';
import requisicaoPacientes from './index'
import { Card, CardBody, CardHeader } from 'reactstrap'

import NavBarTopo from '../navbar/navbarAdmin'


export default function ConsultaPaciente() {
    const [pacientes, setPacientes] = useState([])
    const [exibicaoModal, setExibicaoModal] = useState(false)

    useEffect(async () => {
        setPacientes(await requisicaoPacientes('GET'));
    }, [])

    return (
        <div>
            <NavBarTopo />
            <MDBContainer fluid className="mt-5" >
                <Card className="text-white mt-2">
                    <CardHeader className=" bg-primary">
                        Pacientes
                    </CardHeader>
                    <Table bordered striped hover  responsive className="table-sm">
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
                                            <MDBBtn color="success" className="btn-md" onClick={() => alert("oi")}>Processar</MDBBtn>
                                            <MDBBtn className="ml-2 btn-md" color="primary" onClick={async () => await requisicaoPacientes('GET', paciente._id)}>Editar</MDBBtn>
                                            <MDBBtn className="ml-2 btn-md" color="danger" onClick={()=>setExibicaoModal(true)}>Excluir</MDBBtn>
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
                    <MDBBtn color="danger" onClick={async () => await requisicaoPacientes('DELETE')}>Excluir</MDBBtn>{' '}
                    <MDBBtn color="primary" onClick={()=>setExibicaoModal(false)}>Cancelar</MDBBtn>
                </ModalFooter>
            </Modal>
        </div>
    )
}
