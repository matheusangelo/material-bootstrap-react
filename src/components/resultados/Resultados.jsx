import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, Card, CardBody, CardHeader, Table } from 'reactstrap';
import NavBarTopo from '../navbar/navbarAdmin'
import { Link } from 'react-router-dom';

export default function Resultados(props) {
    const [nome, setNome] = useState('');
    const [resultado, setResultado] = useState('');
    const[value1, setValue1] =useState('');
    const[value2, setValue2] =useState('');
    const[value3, setValue3] =useState('');
    const[value4, setValue4] =useState('');
    const[value5, setValue5] =useState('');
    const[value6, setValue6] =useState('');
    const[value7, setValue7] =useState('');
    const[value8, setValue8] =useState('');
    const[value9, setValue9] =useState('');
    const[value10, setValue10] =useState('');
    const[value11, setValue11] =useState('');
    const[value12, setValue12] =useState('');
    const[value13, setValue13] =useState('');
    const[value14, setValue14] =useState('');
    const[value15, setValue15] =useState('');
    const[value16, setValue16] =useState('');
    const[value17, setValue17] =useState('');
    const[value18, setValue18] =useState('');
    const[value19, setValue19] =useState('');
    const[value20, setValue20] =useState('');
    const[value21, setValue21] =useState('');
    const[value22, setValue22] =useState('');
    const[value23, setValue23] =useState('');
    const[value24, setValue24] =useState('');
    const[value25, setValue25] =useState('');
    const[value26, setValue26] =useState('');
    const[value27, setValue27] =useState('');
    const[value28, setValue28] =useState('');
    const[value29, setValue29] =useState('');
    const[value30, setValue30] =useState('');
    const [observacoes, setObservacoes] = useState('');
    const [idade, setIdade] = useState('');


    useEffect(() => {
        let {nome,resultado, observacoes,idade } = props.match.params;
        setNome(nome);
        setResultado(resultado);
        setObservacoes(observacoes);
        setIdade(idade);

        let {value1,
            value2,
                value3,
                value4,
                value5,
                value6,
                value7,
                value8,
                value9,
                value10,
                value11,
                value12,
                value13,
                value14,
                value15,
                value16,
                value17,
                value18,
                value19,
                value20,
                value21,
                value22,
                value23,
                value24,
                value25,
                value26,
                value27,
                value28,
                value29,
                value30,
        } = props.location.state.inputs;
        setValue1(value1)
        setValue2(value2)
        setValue3(value3)
        setValue4(value4)
        setValue5(value5)
        setValue6(value6)
        setValue7(value7)
        setValue8(value8)
        setValue9(value9)
        setValue10(value10)
        setValue11(value11)
        setValue12(value12)
        setValue13(value13)
        setValue14(value14)
        setValue15(value15)
        setValue16(value16)
        setValue17(value17)
        setValue18(value18)
        setValue19(value19)
        setValue20(value20)
        setValue21(value21)
        setValue22(value22)
        setValue23(value23)
        setValue24(value24)
        setValue25(value25)
        setValue26(value26)
        setValue27(value27)
        setValue28(value28)
        setValue29(value29)
        setValue30(value30)
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
                                            <td>{idade}</td>
                                            <td>{observacoes}</td>
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
                                                <ul style={{ listStyle: "none", textAlign: "center" }}>
                                                    <li>Raio Médio: {value1} </li>
                                                    <li>Textura Média: {value2}</li>
                                                    <li>Perimetro Médio: {value3}</li>
                                                    <li>Área Média: {value4}</li>
                                                    <li>Suavidade Média: {value5}</li>
                                                    <li>Compacidade Média: {value6}</li>
                                                    <li>Concavidade: {value7}</li>
                                                    <li>Média dos Pontos Côncavos: {value8}</li>
                                                    <li>Simetria Média: {value9}</li>
                                                    <li>Dimensão Fractal: {value10}</li>
                                                    <li>Desvio Padrão do Raio: {value11}</li>
                                                    <li>Desvio Padrão da Textura: {value12}</li>
                                                    <li>Desvio Padrão do Perímetro: {value13}</li>
                                                    <li>Desvio Padrão da Área: {value14}</li>
                                                    <li>Desvio Padrão da Suavidade: {value15}</li>
                                                    <li>Desvio Padrão dos Pontos: {value16}</li>
                                                    <li>Desvio Padrão da Concavidade: {value17}</li>
                                                    <li>Média dos Pontos Côncavos: {value18}</li>
                                                    <li>Simetria: {value19}</li>
                                                    <li>Dimensão Fractal: {value20}</li>
                                                    <li>Menor Raio: {value21}</li>
                                                    <li>Menor Textura: {value22}</li>
                                                    <li>Menor Perímetro: {value23}</li>
                                                    <li>Menor Área: {value24}</li>
                                                    <li>Menor Suavidade: {value25}</li>
                                                    <li>Menor Compacidade: {value26}</li>
                                                    <li>Menor Concavidade: {value27}</li>
                                                    <li>Média dos Menores Pontos Côncavos: {value28}</li>
                                                    <li>Menor Simetria: {value29}</li>
                                                    <li>Menor Dimensão Factral: {value30}</li>
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