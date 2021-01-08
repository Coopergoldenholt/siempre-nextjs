import React from 'react';
import {KeyServicesSection,KeyServicesLeft,KeyServicesRight,KeyServicesCard,
KeyServicesCardImg,KeyServicesCardIcon,KeyServicesCardHeading,KeyServicesCardPara,
KeyServicesLeftH3,KeyServicesLeftPara,KeyServicesLeftBtn,KeyServicesRow,KeyServicesCardtopMargin
} from './keyservices.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { KeyServices } from '../../../pagedata/Corporate2';
const KeyServicesPage = () => {
    return (
        <KeyServicesSection id="KeyServicesContainer">
            <Container>
                <KeyServicesRow>
                    <Col md="12" lg="4">
                            <KeyServicesLeft>
                                <KeyServicesLeftH3>{KeyServices.KeyServicesLeft.KeyServicesLeftH3}</KeyServicesLeftH3>
                                <KeyServicesLeftPara>{KeyServices.KeyServicesLeft.KeyServicesLeftPara}</KeyServicesLeftPara>
                                <KeyServicesLeftBtn href="#">{KeyServices.KeyServicesLeft.KeyServicesLeftBtn}</KeyServicesLeftBtn>
                            </KeyServicesLeft>
                    </Col>
                    <Col md="12" lg="8">
                        <KeyServicesRight>
                            <Row>
                                <Col lg="6" md="6" sm="12">
                                    <KeyServicesCardtopMargin>
                                        {
                                            KeyServices.KeyServicesRight1.map((item,idx) => {
                                            return  <KeyServicesCard>
                                                    <KeyServicesCardImg>
                                                        <KeyServicesCardIcon src={require("../../../assets/"+item.KeyServicesCardIcon)} alt=""/>
                                                    </KeyServicesCardImg>
                                                    <KeyServicesCardHeading>{item.KeyServicesCardHeading}</KeyServicesCardHeading>
                                                    <KeyServicesCardPara>{item.KeyServicesCardPara}</KeyServicesCardPara>
                                                </KeyServicesCard>
                                            })
                                        }
                                    </KeyServicesCardtopMargin>
                                </Col>
                                <Col lg="6" md="6" sm="12">
                                    {
                                        KeyServices.KeyServicesRight2.map((item,idx) => {
                                        return <KeyServicesCard>
                                                    <KeyServicesCardImg>
                                                        <KeyServicesCardIcon src={require("../../../assets/"+item.KeyServicesCardIcon)} alt=""/>
                                                    </KeyServicesCardImg>
                                                    <KeyServicesCardHeading>{item.KeyServicesCardHeading}</KeyServicesCardHeading>
                                                    <KeyServicesCardPara>{item.KeyServicesCardPara}</KeyServicesCardPara>
                                                </KeyServicesCard>
                                        })
                                    }
                                </Col>
                            </Row>
                        </KeyServicesRight>
                    </Col>
                </KeyServicesRow>
            </Container>
        </KeyServicesSection>

    );
}

export default KeyServicesPage;