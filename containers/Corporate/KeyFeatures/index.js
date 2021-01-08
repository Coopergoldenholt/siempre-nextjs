import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SectionHeading} from '../Common/common.style';
import {KeyFeaturesSection,KeyFeatInner,FeatureRow,
    KeyFeatLeft,KeyFeatLeftCol,KeyFeatLeftIconWrapper,KeyFeatRightimg,
    KeyFeatLeftIcon,KeyFeatLeftContent,KeyFeatLeftTitle,KeyFeatLeftIconimg,
    KeyFeatLeftPara,KeyFeatRight} from './keyfeatures.style'
import { KeyFeatures } from '../../../pagedata/Corporate';
const KeyFeaturesPage = () => {
            return (
            <KeyFeaturesSection id="featuresContainer">
                <Container>
                    <Row>
                        <Col md="12">
                                <SectionHeading>{KeyFeatures.SectionHeading}</SectionHeading>
                        </Col>
                    </Row>
                    <KeyFeatInner>
                        <FeatureRow>
                            <Col lg="6">
                                <KeyFeatLeft>
                                {
                                    KeyFeatures.KeyFeatLeftCol.map((item,idx) => {
                                    return <KeyFeatLeftCol>
                                        <KeyFeatLeftIconWrapper>
                                            <KeyFeatLeftIcon>
                                                <KeyFeatLeftIconimg src={require("../../../assets/"+item.KeyFeatLeftIconimg)} alt=""/>
                                            </KeyFeatLeftIcon>
                                        </KeyFeatLeftIconWrapper>
                                        <KeyFeatLeftContent>
                                            <KeyFeatLeftTitle>{item.KeyFeatLeftTitle}</KeyFeatLeftTitle>
                                            <KeyFeatLeftPara>{item.KeyFeatLeftPara}</KeyFeatLeftPara>
                                        </KeyFeatLeftContent>
                                    </KeyFeatLeftCol>
                                    })
                                }
                                </KeyFeatLeft>
                            </Col>
                            <Col lg="6">
                                    <KeyFeatRight>
                                        <KeyFeatRightimg 
                                            src={require("../../../assets/"+KeyFeatures.KeyFeatRightimg)} 
                                            alt=""
                                        />
                                    </KeyFeatRight>
                            </Col>
                        </FeatureRow>
                    </KeyFeatInner>
                </Container>
            </KeyFeaturesSection>
        );
    }

export default KeyFeaturesPage;