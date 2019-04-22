import React, { Component } from 'react';
import { Container, Col, Row, Button, Card, CardBody, CardHeader, Table } from 'reactstrap';

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

class ConsultaPaciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "Prontuário",
            valor: 0,
            data: [],
            pacientes: mock_pacientes,
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
            let URL_BASE = "http://127.0.0.1:5000";
            fetch(URL_BASE + '/', { method: 'GET', mode: 'cors' }).then((resultado) => {
                resultado.json().then((dados) => {
                    let retornos = [];
                    if (dados.success === true) {
                        debugger;
                        for (let i = 0; i < dados.data.length; i++) {
                            retornos.push({
                                status: dados.data[i].status
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
                <Container fluid >
                    <Table bordered className="mt-5">
                        <thead>
                            Pacientes
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>IDADE</th>
                                <th>PRIORIDADE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pacientes.map((paciente,i) =>{
                                return(
                                    <tr>
                                        <td>{paciente.id}</td>
                                        <td>{paciente.nome}</td>
                                        <td>{paciente.idade}</td>
                                        <td>{paciente.prioridade}</td>
                                        <td>{paciente.status}</td>
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
