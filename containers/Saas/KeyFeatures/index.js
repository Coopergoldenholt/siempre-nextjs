import React from 'react';
import {KeyFeaturesSection,KeyFeaturesHeading,KeyFeaturesInner,KeyFeaturesRightLi,
    KeyFeaturesRightLih3,KeyFeaturesRightLipara,KeyFeaturesPara,KeyFeaturesHeadingWrapper,
    KeyFeaturesRightBtn,KeyFeaturesRightUl,KeyFeaturesRight,KeyFeaturesLeft,KeyFeaturesLiImgCol,CheckIcon,
    KeyFeaturesLiContentCol,KeyFeaturesLeftImg} from './keyfeatures.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { KeyFeatures } from '../../../pagedata/Saas';
const KeyFeaturesPage = () => {
    return (
        <KeyFeaturesSection id="KeyFeaturesContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <KeyFeaturesHeadingWrapper>
                            <KeyFeaturesHeading>{KeyFeatures.KeyFeaturesHeading}</KeyFeaturesHeading>
                            <KeyFeaturesPara>{KeyFeatures.KeyFeaturesPara}</KeyFeaturesPara>
                        </KeyFeaturesHeadingWrapper>
                    </Col>
                </Row>
                <KeyFeaturesInner>
                    <Row>
                        <Col lg="6" md="12">
                            <KeyFeaturesLeft>
                                <KeyFeaturesLeftImg 
                                    src={require("../../../assets/"+KeyFeatures.KeyFeaturesLeftImg)} 
                                    alt=""
                                />
                            </KeyFeaturesLeft>
                        </Col>
                        <Col lg="6" md="12">
                            <KeyFeaturesRight>
                                <KeyFeaturesRightUl>
                                { 
                                    KeyFeatures.KeyFeaturesRightUl.map((item,idx) => {
                                    return  <KeyFeaturesRightLi>
                                            <KeyFeaturesLiImgCol>
                                                <CheckIcon/>
                                            </KeyFeaturesLiImgCol>
                                            <KeyFeaturesLiContentCol>
                                                <KeyFeaturesRightLih3>{item.KeyFeaturesRightLih3}</KeyFeaturesRightLih3>
                                                <KeyFeaturesRightLipara>{item.KeyFeaturesRightLipara}</KeyFeaturesRightLipara>
                                            </KeyFeaturesLiContentCol>
                                        </KeyFeaturesRightLi>
                                    
                                    })
                                }
                                </KeyFeaturesRightUl>
                                    <KeyFeaturesRightBtn href="#">{KeyFeatures.KeyFeaturesRightBtn}</KeyFeaturesRightBtn>
                            </KeyFeaturesRight>
                        </Col>
                    </Row>
                </KeyFeaturesInner>
            </Container>
        </KeyFeaturesSection>
    );
}

export default KeyFeaturesPage;