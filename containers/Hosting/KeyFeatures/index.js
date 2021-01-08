import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {KeyFeaturesSection,
    KeyFeaturesCol,
    KeyFeaturesIcon,
    KeyFeaturesHeading,
    KeyFeaturesCustomContainer,
    KeyFeaturesDesc} from './keyfeatures.style'
import {SectionHeading} from '../Common/common.style';
import 'bootstrap/dist/css/bootstrap.min.css';
import { KeyFeatures } from '../../../pagedata/Hosting';
const KeyFeaturesPage = () => {
        return (
        <KeyFeaturesSection>
            <Container>
                <Row>
                    <Col md="12">
                            <SectionHeading>{KeyFeatures.SectionHeading}</SectionHeading>
                    </Col>
                </Row>
                <KeyFeaturesCustomContainer>
                    <Row>
                    {
                        KeyFeatures.KeyFeaturesCustomContainer.map((item,idx) => {
                        return <Col md="6" sm="6" lg="4">
                                <KeyFeaturesCol>
                                    <KeyFeaturesIcon src={require("../../../assets/"+item.KeyFeaturesIcon)} alt=""/>
                                    <KeyFeaturesHeading>{item.KeyFeaturesHeading}</KeyFeaturesHeading>
                                    <KeyFeaturesDesc>{item.KeyFeaturesDesc}</KeyFeaturesDesc>
                                </KeyFeaturesCol>
                        </Col>
                        })
                    }
                    </Row>
                </KeyFeaturesCustomContainer>
            </Container>
        </KeyFeaturesSection>
    );
}

export default KeyFeaturesPage;
