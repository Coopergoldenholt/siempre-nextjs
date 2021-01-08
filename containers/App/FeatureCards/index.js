import React from 'react';
import {FeaturesSection,FeaturesContents,FeaturesCard,FeaturesInner,CustomContainer,
FeaturesCardImg,FeaturesCardIcon,FeaturesCardHeading,FeaturesCardPara,
FeaturesCardCenter,FeaturesRow,FeaturesBtn,ContainerWrapper
} from './featurecards.style';
import {Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Features } from '../../../pagedata/App';


const FeaturesPage = () => {
    return (
        <FeaturesSection>
            <FeaturesInner>
            <ContainerWrapper>
                <CustomContainer>
                    <FeaturesRow>
                        <Col md="12" lg="12">
                            <FeaturesContents>
                                    <Row>
                                        <Col lg="4" md="4" sm="12">
                                            <FeaturesCard>
                                                <FeaturesCardImg>
                                                    <FeaturesCardIcon src={require("../../../assets/"+Features.FeaturesContents[0].FeaturesCardIcon)} alt=""/>
                                                </FeaturesCardImg>
                                                <FeaturesCardHeading>{Features.FeaturesContents[0].FeaturesCardHeading}</FeaturesCardHeading>
                                                <FeaturesCardPara>{Features.FeaturesContents[0].FeaturesCardPara}</FeaturesCardPara>
                                                <FeaturesBtn href="#">{Features.FeaturesContents[0].FeaturesBtn}</FeaturesBtn>
                                            </FeaturesCard>
                                        </Col>
                                        <Col lg="4" md="4" sm="12">
                                            <FeaturesCardCenter>
                                                <FeaturesCard>
                                                    <FeaturesCardImg>
                                                        <FeaturesCardIcon src={require("../../../assets/"+Features.FeaturesContents[1].FeaturesCardIcon)} alt=""/>
                                                    </FeaturesCardImg>
                                                    <FeaturesCardHeading>{Features.FeaturesContents[1].FeaturesCardHeading}</FeaturesCardHeading>
                                                    <FeaturesCardPara>{Features.FeaturesContents[1].FeaturesCardPara}</FeaturesCardPara>
                                                    <FeaturesBtn href="#">{Features.FeaturesContents[1].FeaturesBtn}</FeaturesBtn>
                                                </FeaturesCard>
                                            </FeaturesCardCenter>
                                        </Col>
                                        <Col lg="4" md="4" sm="12">
                                            <FeaturesCard>
                                                <FeaturesCardImg>
                                                    <FeaturesCardIcon src={require("../../../assets/"+Features.FeaturesContents[2].FeaturesCardIcon)} alt=""/>
                                                </FeaturesCardImg>
                                                <FeaturesCardHeading>{Features.FeaturesContents[2].FeaturesCardHeading}</FeaturesCardHeading>
                                                <FeaturesCardPara>{Features.FeaturesContents[2].FeaturesCardPara}</FeaturesCardPara>
                                                <FeaturesBtn href="#">{Features.FeaturesContents[2].FeaturesBtn}</FeaturesBtn>
                                            </FeaturesCard>
                                        </Col>
                                    </Row>
                            </FeaturesContents>
                        </Col>
                    </FeaturesRow>
                </CustomContainer>
                </ContainerWrapper>
            </FeaturesInner>
        </FeaturesSection>

    );
}

export default FeaturesPage;