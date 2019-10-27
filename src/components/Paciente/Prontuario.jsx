import React, { Component, useEffect, useState } from 'react';
import { Container, Col, Row, Button, Card, CardBody, CardHeader, Table } from 'reactstrap';
import { MDBInput } from 'mdbreact';
import requisicaoPacientes, { gerenciarSintomas, finalizarCadastro, Context } from './index'
import NavBarTopo from '../navbar/navbarAdmin';
import { Link, useParams } from 'react-router-dom';
import Inputs from './Inputs'

export default function Prontuario(props) {
    //url params
    let { id } = props.match.params;

    //atributos
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [idade, setIdade] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [identificador, setIdentificador] = useState('');
    const [data_atendimento, setData_atendimento] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [prontuario, setProntuario] = useState({});

    //entradas Rede Neural
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');
    const [input6, setInput6] = useState('');
    const [input7, setInput7] = useState('');
    const [input8, setInput8] = useState('');
    const [input9, setInput9] = useState('');
    const [input10, setInput10] = useState('');

    const [input11, setInput11] = useState('');
    const [input12, setInput12] = useState('');
    const [input13, setInput13] = useState('');
    const [input14, setInput14] = useState('');
    const [input15, setInput15] = useState('');
    const [input16, setInput16] = useState('');
    const [input17, setInput17] = useState('');
    const [input18, setInput18] = useState('');
    const [input19, setInput19] = useState('');
    const [input20, setInput20] = useState('');

    const [input21, setInput21] = useState('');
    const [input22, setInput22] = useState('');
    const [input23, setInput23] = useState('');
    const [input24, setInput24] = useState('');
    const [input25, setInput25] = useState('');
    const [input26, setInput26] = useState('');
    const [input27, setInput27] = useState('');
    const [input28, setInput28] = useState('');
    const [input29, setInput29] = useState('');
    const [input30, setInput30] = useState('');



    useEffect(() => {
        (async () => {
            if (id) {
                await setProntuario(await requisicaoPacientes('GET', id))
            }
        })();
    }, [])

    useEffect(() => {
        formatLabels(prontuario);
    }, [prontuario])

    function sendPropsToSave() {
        let propeties = {
            nome: nome,
            sexo: sexo,
            idade: idade,
            rg: rg,
            cpf: cpf,
            identificador: identificador,
            data_atendimento: data_atendimento,
            observacoes: observacoes,
            prontuario: prontuario,
            inputs: {
                value1: input1,
                value2: input2,
                value3: input3,
                value4: input4,
                value5: input5,
                value6: input6,
                value7: input7,
                value8: input8,
                value9: input9,
                value10: input10,
                value11:input11,
                value12:input12,
                value13:input13,
                value14:input14,
                value15:input15,
                value16:input16,
                value17:input17,
                value18:input18,
                value19:input19,
                value20:input20,
                value21:input21,
                value22:input22,
                value23:input23,
                value24:input24,
                value25:input25,
                value26:input26,
                value27:input27,
                value28:input28,
                value29:input29,
                value30:input30

            }
        }
        finalizarCadastro(propeties, id);
    }

    function formatLabels(prontuario) {
        if (prontuario) {
            setNome(prontuario.nome);
            setSexo(prontuario.sexo);
            setIdade(prontuario.idade);
            setRg(prontuario.rg);
            setCpf(prontuario.cpf);
            setIdentificador(prontuario.identificador);
            setData_atendimento(prontuario.data_atendimento);
            setObservacoes(prontuario.observacoes);
            setProntuario(prontuario.prontuario);

            //entradas Rede Neural
            if (prontuario.inputs) {
                setInput1(prontuario.inputs.value1);
                setInput2(prontuario.inputs.value2);
                setInput3(prontuario.inputs.value3);
                setInput4(prontuario.inputs.value4);
                setInput5(prontuario.inputs.value5);
                setInput6(prontuario.inputs.value6);
                setInput7(prontuario.inputs.value7);
                setInput8(prontuario.inputs.value8);
                setInput9(prontuario.inputs.value9);
                setInput10(prontuario.inputs.value10);
                setInput11(prontuario.inputs.value11);
                setInput12(prontuario.inputs.value12);
                setInput13(prontuario.inputs.value13);
                setInput14(prontuario.inputs.value14);
                setInput15(prontuario.inputs.value15);
                setInput16(prontuario.inputs.value16);
                setInput17(prontuario.inputs.value17);
                setInput18(prontuario.inputs.value18);
                setInput19(prontuario.inputs.value19);
                setInput20(prontuario.inputs.value20);
                setInput21(prontuario.inputs.value21);
                setInput22(prontuario.inputs.value22);
                setInput23(prontuario.inputs.value23);
                setInput24(prontuario.inputs.value24);
                setInput25(prontuario.inputs.value25);
                setInput26(prontuario.inputs.value26);
                setInput27(prontuario.inputs.value27);
                setInput28(prontuario.inputs.value28);
                setInput29(prontuario.inputs.value29);
                setInput30(prontuario.inputs.value30);
            }



        }
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
                                            value={rg}
                                            onChange={(e) => setRg(e.target.value)}
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
                                            value={cpf}
                                            onChange={(e) => setCpf(e.target.value)}
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
                                            value={sexo}
                                            onChange={(e) => setSexo(e.target.value)}>
                                            <option selected>Selecione...</option>
                                            <option value="1">Masculino</option>
                                            <option value="2">Feminino</option>
                                        </select>
                                    </Col>
                                    <Col xs="4">
                                        <MDBInput
                                            value={identificador}
                                            onChange={(e) => setIdentificador(e.target.value)}
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
                                            value={data_atendimento}
                                            onChange={(e) => setData_atendimento(e.target.value)}
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
                                                value={observacoes}
                                                onChange={(e) => { setObservacoes(e.target.value) }}
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
                                        <Context.Provider value={
                                            {

                                                input1: input1,
                                                input2: input2,
                                                input3: input3,
                                                input4: input4,
                                                input5: input5,
                                                input6: input6,
                                                input7: input7,
                                                input8: input8,
                                                input9: input9,
                                                input10: input10,

                                                input11: input11,
                                                input12: input12,
                                                input13: input13,
                                                input14: input14,
                                                input15: input15,
                                                input16: input16,
                                                input17: input17,
                                                input18: input18,
                                                input19: input19,
                                                input20: input20,

                                                input21: input21,
                                                input22: input22,
                                                input23: input23,
                                                input24: input24,
                                                input25: input25,
                                                input26: input26,
                                                input27: input27,
                                                input28: input28,
                                                input29: input29,
                                                input30: input30,

                                                //methods

                                                setInput1: setInput1,
                                                setInput2: setInput2,
                                                setInput3: setInput3,
                                                setInput4: setInput4,
                                                setInput5: setInput5,
                                                setInput6: setInput6,
                                                setInput7: setInput7,
                                                setInput8: setInput8,
                                                setInput9: setInput9,
                                                setInput10: setInput10,

                                                setInput11: setInput11,
                                                setInput12: setInput12,
                                                setInput13: setInput13,
                                                setInput14: setInput14,
                                                setInput15: setInput15,
                                                setInput16: setInput16,
                                                setInput17: setInput17,
                                                setInput18: setInput18,
                                                setInput19: setInput19,
                                                setInput20: setInput20,

                                                setInput21: setInput21,
                                                setInput22: setInput22,
                                                setInput23: setInput23,
                                                setInput24: setInput24,
                                                setInput25: setInput25,
                                                setInput26: setInput26,
                                                setInput27: setInput27,
                                                setInput28: setInput28,
                                                setInput29: setInput29,
                                                setInput30: setInput30,

                                            }

                                        }>
                                            <Inputs />
                                        </Context.Provider>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="text-right mt-3">
                    <Col>
                        <Link to="/master/consulta" color="danger" className="btn btn-danger mb-3">Voltar</Link>
                        <Button color="primary" className="mb-3" onClick={() => sendPropsToSave()}>Finalizar cadastro</Button>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
