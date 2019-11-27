import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, Card, CardBody, CardHeader, Table } from 'reactstrap';
import NavBarTopo from '../navbar/navbarAdmin'
import { Link } from 'react-router-dom';

export default function Resultados(props) {
    const [nome, setNome] = useState('');
    const [resultado, setResultado] = useState('');

    useEffect(() => {
        let { nome } = props.match.params;
        let { resultado } = props.match.params;
        setNome(nome);
        setResultado(resultado);
    }, [])
    return (
        <>
            <NavBarTopo />
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader className=" bg-primary text-white">
                                <b>Informações Gerais</b>
                            </CardHeader>
                            <CardBody className="bordered shadow">
                                <Row>
                                    <Col>
                                        <b>Informações do paciente</b>
                                    </Col>
                                </Row>
                                <Table>
                                    <thead style={{ fontWeight: "bold" }}>
                                        <tr>
                                            <th scope="col">Nome</th>
                                            <th scope="col"> Idade</th>
                                            <th scope="col">Observações </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{nome}</td>
                                            <td>{resultado}</td>
                                            <td>Teste de negativo</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Row>
                                    <Col>
                                        <b>Informações da Rede</b>
                                    </Col>
                                </Row>
                                <Table>
                                    <thead style={{ fontWeight: "bold" }}>
                                        <tr>
                                            <th scope="col">Nome</th>
                                            <th scope="col"> Tempo de resposta</th>
                                            <th scope="col">Parâmetros </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>breast.h5</td>
                                            <td>4.3s</td>
                                            <td>
                                                <ul style={{listStyle:"none", textAlign:"center"}}>
                                                    <li>Raio médio  : 0.1 </li>
                                                    <li>Textura média : 0.1 </li>
                                                    <li>Perimetro médio : 0.1 </li>
                                                    <li>Área média : 0.1 </li>
                                                    <li>Suavidade Média : 0.1 </li>
                                                    <li>Compacidade Média : 0.1 </li>
                                                    <li>Concavidade : 0.1 </li>
                                                    <li>Média dos pontos Côncavos : 0.1 </li>
                                                    <li>Simetria Média : 0.1 </li>
                                                    <li>Dimensão Fractal : 0.1 </li>
                                                    <li>Desvio padrão do raio : 0.1 </li>
                                                    <li>Desvio padrão da textura : 0.1 </li>
                                                    <li>Desvio padrão do perímetro : 0.1 </li>
                                                    <li>Desvio padrão da Área : 0.1 </li>
                                                    <li>Desvio padrão da Suavidade : 0.1 </li>
                                                    <li>Desvio padrão dos pontos  : 0.1 </li>
                                                    <li>Desvio padrão da concavida : 0.1 </li>
                                                    <li>Média dos pontos côncavos : 0.1 </li>
                                                    <li>Simetria : 0.1 </li>
                                                    <li>Dimensão Fractal : 0.1 </li>
                                                    <li>Menor Raio : 0.1 </li>
                                                    <li>Menor textura : 0.1 </li>
                                                    <li>Menor perímetro : 0.1 </li>
                                                    <li>Menor área : 0.1 </li>
                                                    <li>Menor suavidade : 0.1 </li>
                                                    <li>Menor compacidade : 0.1 </li>
                                                    <li>Menor concavidade  : 0.1 </li>
                                                    <li>Média dos menores pontos cônvcavos : 0.1 </li>
                                                    <li>Menor simetria : 0.1 </li>
                                                    <li>Menor dimensão factral : 0.1 </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Card>
                            <CardHeader className=" bg-primary text-white">
                                <b>Resultados</b>
                            </CardHeader>
                            <CardBody className="bordered shadow">
                                <Table className="striped text-center">
                                    <thead style={{ fontWeight: "bold" }}>
                                        <tr>
                                            <th scope="col">Descrição</th>
                                            <th scope="col">Resultado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{nome}</td>
                                            <td>{resultado}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="text-rigth">
                    <Col xs='12' className="mt-2">
                        <Link to="/prontuario" className="btn btn-primary">Voltar</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )

}