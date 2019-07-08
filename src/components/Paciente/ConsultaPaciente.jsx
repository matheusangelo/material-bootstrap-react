import React, { Component } from 'react';
import { Container, Button, Table } from 'reactstrap';
import { URL_BASE } from '../../include/base'
import NavBarTopo from '../navbar/navbarAdmin'


class ConsultaPaciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "Pacientes",
            valor: 0,
            data: [],
            pacientes: [],
        }
    }

    deletar = () => {
        this.setState({ titulo: "oi" });
    };

    processarProntuario = () => {
        alert("Implementar treinamento da rede")
    }

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
                <navbarAdmin/>
                <Container fluid >
                    <div className="mt-3">
                        <h3> {this.state.titulo} </h3>
                    </div>
                    <hr className="my-2" />
                    <Table bordered className="mt-5">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Prioridade</th>
                                <th>Status</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pacientes.map((paciente, i) => {
                                return (
                                    <tr>
                                        <td>{i}</td>
                                        <td>{paciente.nome}</td>
                                        <td>{paciente.idade}</td>
                                        <td>{paciente.prioridade}</td>
                                        <td>{paciente.status}</td>
                                        <td>
                                            <Button color="success" onClick={this.processarProntuario}>Processar</Button>
                                            <Button className="ml-2" color="primary" onClick={this.processarProntuario}>Editar</Button>
                                            <Button className="ml-2" color="danger" onClick={this.processarProntuario}>Excluir</Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }

}
export default ConsultaPaciente;
