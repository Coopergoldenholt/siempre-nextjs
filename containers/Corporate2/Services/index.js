import React from 'react';
import {ServicesWrapper,ServicesLeft,ServicesRight,ServicesCard,
ServicesCardImg,ServicesCardIcon,ServicesCardHeading,ServicesCardPara,Heading,HeadingWrapper,
ServicesRow,ServicesImg
} from './services.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Services } from '../../../pagedata/Corporate2';

const ServicesPage = () => {
    return (
        <ServicesWrapper id="servicesContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <HeadingWrapper>
                                <Heading>{Services.Heading}</Heading>
                        </HeadingWrapper>
                    </Col>
                </Row>
                <ServicesRow>
                    <Col md="12" lg="6" xl="7">
                        <ServicesRight>
                            <Row>
                                <Col lg="6" md="6" sm="12">
                                {
                                    Services.ServicesRight1.map((item,idx) => {
                                    return <ServicesCard>
                                            <ServicesCardImg>
                                                <ServicesCardIcon src={require("../../../assets/"+item.ServicesCardIcon)} alt=""/>
                                            </ServicesCardImg>
                                            <ServicesCardHeading>{item.ServicesCardHeading}</ServicesCardHeading>
                                            <ServicesCardPara>{item.ServicesCardPara}</ServicesCardPara>
                                        </ServicesCard>
                                    })
                                }
                                </Col>
                                <Col lg="6" md="6" sm="12">
                                {
                                    Services.ServicesRight2.map((item,idx) => {
                                    return  <ServicesCard>
                                            <ServicesCardImg>
                                                <ServicesCardIcon src={require("../../../assets/"+item.ServicesCardIcon)} alt=""/>
                                            </ServicesCardImg>
                                            <ServicesCardHeading>{item.ServicesCardHeading}</ServicesCardHeading>
                                            <ServicesCardPara>{item.ServicesCardPara}</ServicesCardPara>
                                        </ServicesCard>
                                    })
                                }
                                </Col>
                            </Row>
                        </ServicesRight>
                    </Col>
                    <Col md="12" lg="6" xl="5">
                        <ServicesLeft>
                                <ServicesImg 
                                    src={require("../../../assets/"+Services.ServicesRight3.ServicesLeftImg)} 
                                    alt=""
                                />
                        </ServicesLeft>
                    </Col>
                </ServicesRow>
            </Container>
        </ServicesWrapper>

    );
}

export default ServicesPage;