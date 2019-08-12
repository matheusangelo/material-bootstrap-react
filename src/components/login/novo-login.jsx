import React, { Component, useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody, MDBInputSelect } from 'mdbreact';
import { Button, Form } from 'reactstrap';
import './login.css';
import { Link } from 'react-router-dom';
import NavbarTopo from '../navbar/navbar'

export default function CadastroLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
    const [nome, setNome] = useState('');
    const [perfil, setPerfil] = useState('');

    return (
        <>
            <NavbarTopo />
            <MDBContainer className="login-container">
                <MDBRow>
                    <MDBCol>
                        <div className="grey-text">
                            <Form className="login-form">
                                <MDBCard >
                                    <MDBCardBody>
                                        <p className="h5 text-center"> Cadastro</p>
                                        <MDBInput
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            icon="user"
                                            label="Username"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                            containerClass="text-left"
                                        />
                                        <MDBInput
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            icon="envelope"
                                            label="E-mail"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                            containerClass="text-left"
                                        />
                                        <MDBInput
                                            icon="lock"
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                            label="Password"
                                            group
                                            type="password"
                                            validate
                                            containerClass="text-left"
                                        />
                                        <MDBInput
                                            icon="lock"
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                            label="Confirm Password"
                                            group
                                            type="password"
                                            validate
                                            containerClass="text-left"
                                        />
                                        Profile                                        
                                        <select className="form-control">
                                            <option>Select....</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                        <hr />
                                        <div className="text-center">
                                            <Button type="submit" className="login-btn mb-4" color="primary">Confirmar</Button>
                                            <Link to="/" type="button" className="btn btn-danger login-btn mb-4">Voltar</Link>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </Form>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};
