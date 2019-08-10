import React, { Component, useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBCard, MDBCardBody } from 'mdbreact';
import { Button, Form } from 'reactstrap';
import './login.css';
import NavbarTopo from '../navbar/navbar'

export default function Login() {
    // const [email, setEmail] = useState('');
    // const [senha,setSenha] = useState('');

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
                                        <p className="h5 text-center"> Sign-In</p>
                                        <MDBInput
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
                                            label="Password"
                                            group
                                            type="password"
                                            validate
                                            containerClass="text-left"
                                        />
                                        <hr />
                                        <div className="text-center">
                                            <Button type="submit" className="login-btn mb-4" color="primary">Entrar</Button>
                                            <Button type="button" className="login-btn mb-4" color="danger">Cadastrar-se</Button>
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
