import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {KeyServicesSection,
    KeyServicesCol,
    KeyServicesIcon,
    KeyServicesHeading,
    KeyServicesCustomContainer,
    KeyServicesDesc} from './keyservices.style'
import {SectionHeading} from '../Common/common.style';
import { KeyServices } from '../../../pagedata/Corporate';

const KeyServicesPage = () => {
        return (
        <KeyServicesSection>
            <Container>
                <Row>
                    <Col md="12">
                        <SectionHeading>{KeyServices.SectionHeading}</SectionHeading>
                    </Col>
                </Row>
                <KeyServicesCustomContainer>
                    <Row>
                    {
                        KeyServices.KeyServicesCustomContainer.map((item,idx) => {
                        return <Col md="6" sm="6" lg="4">
                                <KeyServicesCol>
                                    <KeyServicesIcon src={require("../../../assets/"+item.KeyServicesIcon)} alt=""/>
                                    <KeyServicesHeading>{item.KeyServicesHeading}</KeyServicesHeading>
                                    <KeyServicesDesc>{item.KeyServicesDesc}</KeyServicesDesc>
                                </KeyServicesCol>
                        </Col>
                        })
                    }
                    </Row>
                </KeyServicesCustomContainer>
            </Container>
        </KeyServicesSection>
    );
}

export default KeyServicesPage;
