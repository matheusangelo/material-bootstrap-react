import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBInputGroup } from 'mdbreact';
import { Button, Form } from 'reactstrap';
import './login.css';
import NavbarTopo from '../navbar/navbar'

export default function Login() {
    return (
        <>
            <NavbarTopo />
            <MDBContainer className="login-container">
                <MDBRow>
                    <MDBCol>
                        <div className="grey-text">
                            <Form className="login-form">
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
                            </Form>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};
