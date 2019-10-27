import React, { Component, useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBCard, MDBCardBody } from 'mdbreact';
import { Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import './login.css';
import NavbarTopo from '../navbar/navbar'

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(()=>{
        console.log(email,senha)
    },[email,senha])

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
                                            value={email}
                                            onChange = {(e)=>setEmail(e.target.value)}
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
                                            onChange = {(e)=>setSenha(e.target.value)}
                                            label="Password"
                                            group
                                            type="password"
                                            validate
                                            containerClass="text-left"
                                        />
                                        <hr />
                                        <div className="text-center">
                                            <Button type="submit" className="login-btn mb-4" color="primary">Entrar</Button>
                                            <Link to="/novo" type="button" className="btn btn-danger login-btn mb-4">Cadastrar</Link>
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
