import React from 'react';
import {ServicesWrapper,ServicesHeading,ServicesInner,ServicesRightLi,ButtonWrapper,
    ServicesRightLih3,ServicesRightLipara,ServicesPara,ServicesHeadingWrapper,RightArrowYellow,RightArrow,
    ServicesRightBtn,ServicesRightUl,ServicesRight,ServicesLeft,ServicesLiImgCol,CheckIcon,ServicesLeftImg,
    ServicesLiContentCol} from './services.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Services } from '../../../pagedata/App2';
const ServicesPage = () => {
        return (

        <ServicesWrapper id="servicesContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <ServicesHeadingWrapper>
                            <ServicesHeading>{Services.ServicesHeading}</ServicesHeading>
                            <ServicesPara>{Services.ServicesPara}</ServicesPara>
                        </ServicesHeadingWrapper>
                    </Col>
                </Row>
                <ServicesInner>
                    <Row>
                        <Col lg="6" md="12">
                            <ServicesLeft>
                                <ServicesLeftImg 
                                    src={require("../../../assets/"+Services.ServicesLeftImg)} 
                                    alt=""
                                />
                            </ServicesLeft>
                        </Col>
                        <Col lg="6" md="12">
                            <ServicesRight>
                                    <ServicesRightUl>
                                    { 
                                        Services.ServicesRightUl.map((item,idx) => {
                                        return <ServicesRightLi>
                                            <ServicesLiImgCol>
                                                <CheckIcon/>
                                            </ServicesLiImgCol>
                                            <ServicesLiContentCol>
                                                <ServicesRightLih3>{item.ServicesRightLih3}</ServicesRightLih3>
                                                <ServicesRightLipara>{item.ServicesRightLipara}</ServicesRightLipara>
                                            </ServicesLiContentCol>
                                        </ServicesRightLi>
                                            
                                        })
                                    }
                                    </ServicesRightUl>
                                <ButtonWrapper>
                                    <ServicesRightBtn href="#">{Services.ServicesRightBtn}
                                        <RightArrow src={require("../../../assets/"+Services.RightArrow)} alt=""/>
                                        <RightArrowYellow src={require("../../../assets/"+Services.RightArrowYellow)} alt=""/>
                                    </ServicesRightBtn>
                                </ButtonWrapper>
                            </ServicesRight>
                        </Col>
                    </Row>
                </ServicesInner>
            </Container>
        </ServicesWrapper>
    );
}

export default ServicesPage;