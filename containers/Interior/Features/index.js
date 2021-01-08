import React from 'react';
import {Container, Row, Col} from  "react-bootstrap";
import {FeaturesSection,FeatureCustomContainer,
    FeatureCol,FeatureText,FeatureImg,FeatureImgTopPadded} from './features.style' 
import {SectionHeading} from '../Common/common.style';

import 'bootstrap/dist/css/bootstrap.min.css';
import { KeyFeatures } from '../../../pagedata/Interior';

const FeaturesPage = () => {
    return (
        <FeaturesSection id="featuresContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <SectionHeading>{KeyFeatures.SectionHeading}</SectionHeading>
                    </Col>
                </Row>
                <FeatureCustomContainer>
                <Row>
                { 
                    KeyFeatures.FeatureCustomContainer.map((item,idx) => {
                    return <Col md="3" sm="6" xs="6">
                            <FeatureCol>
                                    {
                                        (idx % 2 === 1) &&
                                        <FeatureImg 
                                            src={require("../../../assets/"+item.FeatureImg)} 
                                            alt=""
                                        />
                                    }

                                    {
                                        (idx % 2 === 0) &&
                                        <FeatureImgTopPadded 
                                            src={require("../../../assets/"+item.FeatureImg)} 
                                            alt=""
                                        />
                                    }
                                    <FeatureText>{item.FeatureText}</FeatureText>
                            </FeatureCol>
                        </Col>
                    })
                }
                </Row>
                </FeatureCustomContainer>
            </Container>
        </FeaturesSection>
    );
}

export default FeaturesPage