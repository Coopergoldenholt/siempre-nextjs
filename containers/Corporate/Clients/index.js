import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SectionHeading} from '../Common/common.style';
import {ClientsSection,ClientsInner,ClientsCol,ClientsImage} from './clients.style'
import { Clients } from '../../../pagedata/Corporate';

const ClientsPage = () => {
        return (
            <ClientsSection>
                <Container>
                    <Row>
                        <Col md="12">
                            <SectionHeading>Our Clients</SectionHeading>
                        </Col>
                    </Row>
                    <ClientsInner>
                        <Row>
                            {
                                Clients.ClientsInner1.map((item,idx)=>{
                                    return <Col md="3" xs="6">
                                            <ClientsCol>
                                                <ClientsImage 
                                                    src={require("../../../assets/"+item.ClientsImage)} 
                                                    alt=""
                                                />
                                            </ClientsCol>
                                    </Col>
                                })
                            }
                        </Row>
                        <Row>
                            {
                                Clients.ClientsInner2.map((item,idx)=>{
                                    return <Col md="3" xs="6">
                                            <ClientsCol>
                                                <ClientsImage 
                                                    src={require("../../../assets/"+item.ClientsImage)} 
                                                    alt=""
                                                />
                                            </ClientsCol>
                                    </Col>
                                })
                            }
                        </Row>
                        <Row>
                            {
                                Clients.ClientsInner3.map((item,idx)=>{
                                    return <Col md="3" xs="6">
                                            <ClientsCol>
                                                <ClientsImage 
                                                    src={require("../../../assets/"+item.ClientsImage)} 
                                                    alt=""
                                                />
                                            </ClientsCol>
                                    </Col>
                                })
                            }
                        </Row>
                        
                    </ClientsInner>
                </Container>
            </ClientsSection>
        );
    }

export default ClientsPage;