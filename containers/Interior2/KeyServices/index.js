import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {KeyServicesSection,KeyServicesRight,
    KeyServicesCol1,KeyServicesCol2,
    KeyServicesIcon,
    KeyServicesHeading,
    KeyServicesCustomContainer,
    KeyServicesRightInnerRow,KeyServicesLeftImage,
    KeyServicesDesc} from './keyservices.style'
import {SectionHeading} from '../Common/common.style';

import 'bootstrap/dist/css/bootstrap.min.css';
import { KeyServices } from '../../../pagedata/Interior2';

const KeyServicesPage = () => {
    return (
        <KeyServicesSection id="servicesContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <SectionHeading>{KeyServices.SectionHeading}</SectionHeading>
                    </Col>
                </Row>

                    <KeyServicesCustomContainer>
                        <KeyServicesRight>
                            <Col lg="4" md="12" sm="12">
                                <KeyServicesLeftImage 
                                    src={require("../../../assets/"+KeyServices.KeyServicesLeftImage)} 
                                    alt=""
                                />
                            </Col>
                            <Col lg="8" md="12" sm="12">
                                <KeyServicesRightInnerRow>
                                    <Col md="6">
                                        <KeyServicesCol1>
                                            <KeyServicesIcon src={require("../../../assets/"+KeyServices.KeyServicesCustomContainer[0].KeyServicesIcon)} alt=""/>
                                            <KeyServicesHeading>{KeyServices.KeyServicesCustomContainer[0].KeyServicesHeading}</KeyServicesHeading>
                                            <KeyServicesDesc>{KeyServices.KeyServicesCustomContainer[0].KeyServicesDesc}</KeyServicesDesc>
                                        </KeyServicesCol1>
                                    </Col>
                                    <Col md="6">
                                        <KeyServicesCol2>
                                            <KeyServicesIcon src={require("../../../assets/"+KeyServices.KeyServicesCustomContainer[1].KeyServicesIcon)} alt=""/>
                                            <KeyServicesHeading>{KeyServices.KeyServicesCustomContainer[1].KeyServicesHeading}</KeyServicesHeading>
                                            <KeyServicesDesc>{KeyServices.KeyServicesCustomContainer[1].KeyServicesDesc}</KeyServicesDesc>
                                        </KeyServicesCol2>
                                    </Col>
                                    <Col md="6">
                                        <KeyServicesCol1>
                                            <KeyServicesIcon src={require("../../../assets/"+KeyServices.KeyServicesCustomContainer[2].KeyServicesIcon)} alt=""/>
                                            <KeyServicesHeading>{KeyServices.KeyServicesCustomContainer[2].KeyServicesHeading}</KeyServicesHeading>
                                            <KeyServicesDesc>{KeyServices.KeyServicesCustomContainer[2].KeyServicesDesc}</KeyServicesDesc>
                                        </KeyServicesCol1>
                                    </Col>
                                    <Col md="6">
                                        <KeyServicesCol2>
                                            <KeyServicesIcon src={require("../../../assets/"+KeyServices.KeyServicesCustomContainer[3].KeyServicesIcon)} alt=""/>
                                            <KeyServicesHeading>{KeyServices.KeyServicesCustomContainer[3].KeyServicesHeading}</KeyServicesHeading>
                                            <KeyServicesDesc>{KeyServices.KeyServicesCustomContainer[3].KeyServicesDesc}</KeyServicesDesc>
                                        </KeyServicesCol2>
                                    </Col>
                                </KeyServicesRightInnerRow>
                            </Col>
                        </KeyServicesRight>
                    </KeyServicesCustomContainer>
            </Container>
        </KeyServicesSection>
    );
}

export default KeyServicesPage;
