import React from 'react';
import {FeaturesWrapper,FeaturesRight,FeaturesCard,HeadingWrapper,Heading,
FeaturesCardImg,FeaturesCardHeading,FeaturesCardPara,FeaturesRow,FeaturesCardIcon
} from './keyfeatures.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { KeyFeatures } from '../../../pagedata/Showcase';

const KeyFeaturesPage =()=>{
    return (
            <FeaturesWrapper id="featuresContainer">
                <Container>
                    <Row>
                        <Col md="12">
                                <HeadingWrapper>
                                    <Heading>{KeyFeatures.Row1.Heading}</Heading>
                                </HeadingWrapper>
                        </Col>
                    </Row>
                    <FeaturesRow>
                        <Col md="12" lg="12">
                            <FeaturesRight>
                                <Row>
                                {
                                    KeyFeatures.Row2.map((item,idx) => {
                                    return <Col lg="4" md="4" sm="6">
                                            <FeaturesCard>
                                                <FeaturesCardImg>
                                                    <FeaturesCardIcon 
                                                        src={require("../../../assets/"+item.FeaturesCardIcon)} 
                                                        alt=""
                                                    />
                                                </FeaturesCardImg>
                                                <FeaturesCardHeading>{item.FeaturesCardHeading}</FeaturesCardHeading>
                                                <FeaturesCardPara>{item.FeaturesCardPara}</FeaturesCardPara>
                                            </FeaturesCard>
                                    </Col>
                                    })
                                }
                                </Row>
                            </FeaturesRight>
                        </Col>
                    </FeaturesRow>
                </Container>
            </FeaturesWrapper>
    );
}
export default KeyFeaturesPage;