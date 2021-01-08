import React from 'react';
import {FeaturesWrapper,FeaturesRight,FeaturesCard,
FeaturesCardImg,FeaturesCardIcon,FeaturesCardHeading,FeaturesCardPara,RightArrowYellow,RightArrow,
FeaturesCardCenter,FeaturesRow,FeaturesBtn,ButtonWrapper
} from './features.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Features } from '../../../pagedata/App2';

const FeaturesPage = () => {
    return (
        <FeaturesWrapper id="featuresContainer">
            <Container>
                <FeaturesRow>
                    <Col md="12" lg="12">
                        <FeaturesRight>
                            <Row>
                                <Col lg="4" md="4" sm="12">
                                        <FeaturesCard>
                                            <FeaturesCardImg>
                                                <FeaturesCardIcon src={require("../../../assets/"+Features.FeaturesRight[0].FeaturesCardIcon)} alt=""/>
                                            </FeaturesCardImg>
                                            <FeaturesCardHeading>{Features.FeaturesRight[0].FeaturesCardHeading}</FeaturesCardHeading>
                                            <FeaturesCardPara>{Features.FeaturesRight[0].FeaturesCardPara}</FeaturesCardPara>
                                            <ButtonWrapper>
                                                <FeaturesBtn href="#">{Features.FeaturesRight[0].FeaturesBtn}
                                                    <RightArrow src={require("../../../assets/"+Features.FeaturesRight[0].RightArrow)} alt=""/>
                                                    <RightArrowYellow src={require("../../../assets/"+Features.FeaturesRight[0].RightArrowYellow)} alt=""/>
                                                </FeaturesBtn>
                                            </ButtonWrapper>
                                        </FeaturesCard>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                        <FeaturesCardCenter>
                                            <FeaturesCard>
                                                <FeaturesCardImg>
                                                    <FeaturesCardIcon src={require("../../../assets/"+Features.FeaturesRight[1].FeaturesCardIcon)} alt=""/>
                                                </FeaturesCardImg>
                                                <FeaturesCardHeading>{Features.FeaturesRight[1].FeaturesCardHeading}</FeaturesCardHeading>
                                                <FeaturesCardPara>{Features.FeaturesRight[1].FeaturesCardPara}</FeaturesCardPara>
                                                <ButtonWrapper>
                                                    <FeaturesBtn href="#">{Features.FeaturesRight[1].FeaturesBtn}
                                                        <RightArrow src={require("../../../assets/"+Features.FeaturesRight[1].RightArrow)} alt=""/>
                                                        <RightArrowYellow src={require("../../../assets/"+Features.FeaturesRight[1].RightArrowYellow)} alt=""/>
                                                    </FeaturesBtn>
                                                </ButtonWrapper>
                                            </FeaturesCard>
                                        </FeaturesCardCenter>
                                </Col>
                                <Col lg="4" md="4" sm="12">
                                        <FeaturesCard>
                                            <FeaturesCardImg>
                                                <FeaturesCardIcon src={require("../../../assets/"+Features.FeaturesRight[2].FeaturesCardIcon)} alt=""/>
                                            </FeaturesCardImg>
                                            <FeaturesCardHeading>{Features.FeaturesRight[2].FeaturesCardHeading}</FeaturesCardHeading>
                                            <FeaturesCardPara>{Features.FeaturesRight[2].FeaturesCardPara}</FeaturesCardPara>
                                            <ButtonWrapper>
                                                <FeaturesBtn href="#">{Features.FeaturesRight[2].FeaturesBtn}
                                                    <RightArrow src={require("../../../assets/"+Features.FeaturesRight[2].RightArrow)} alt=""/>
                                                    <RightArrowYellow src={require("../../../assets/"+Features.FeaturesRight[2].RightArrowYellow)} alt=""/>
                                                </FeaturesBtn>
                                            </ButtonWrapper>
                                        </FeaturesCard>
                                </Col>
                            </Row>
                        </FeaturesRight>
                    </Col>
                </FeaturesRow>
            </Container>
        </FeaturesWrapper>

    );
}

export default FeaturesPage;