import React from 'react';
import {FeaturesSection,FeaturesLeft,FeaturesRight,FeaturesCard,
FeaturesCardImg,FeaturesCardIcon,FeaturesCardHeading,FeaturesCardPara,
FeaturesLeftH3,FeaturesLeftPara,FeaturesLeftBtn,FeaturesRow
} from './features.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Features } from '../../../pagedata/Saas';

const FeaturesPage = () => {
    return (
        <FeaturesSection id="featuresContainer">
            <Container>
                <FeaturesRow>
                    <Col md="12" lg="4">
                        <FeaturesLeft>
                            <FeaturesLeftH3>{Features.FeaturesLeftH3}</FeaturesLeftH3>
                            <FeaturesLeftPara>{Features.FeaturesLeftPara}</FeaturesLeftPara>
                            <FeaturesLeftBtn href="#">{Features.FeaturesLeftBtn}</FeaturesLeftBtn>
                        </FeaturesLeft>
                    </Col>
                    <Col md="12" lg="8">
                        <FeaturesRight>
                            <Row>
                            { 
                                Features.FeaturesRight.map((item,idx) => {
                                return <Col lg="6" md="6" sm="12">
                                        <FeaturesCard>
                                            <FeaturesCardImg>
                                                <FeaturesCardIcon src={require("../../../assets/"+item.FeaturesCardIcon)} alt=""/>
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
        </FeaturesSection>

    );
}

export default FeaturesPage;