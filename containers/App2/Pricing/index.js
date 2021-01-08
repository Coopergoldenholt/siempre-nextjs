import React from 'react';
import {PricingWrapper,PricingHeadingWrapper,PricingSubHeading,
    PricingHeading,PricingPlanCol,PricingPlanImg,PricingPlanHeading,PricingPlanPrice,
    PricingPlanLine,ButtonWrapper,PricingPlanBtn,PricingPlanLightText,PricingPlanDarkText,PricingPlanColCenter,
    PricingPlanBtnCenter
} from './pricing.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pricing } from '../../../pagedata/App2';
const PricingPage = () =>{
  
    return (
        <PricingWrapper id="pricingContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <PricingHeadingWrapper>
                                <PricingHeading>
                                    {Pricing.PricingHeading}
                                </PricingHeading>
                                <PricingSubHeading>
                                    {Pricing.PricingSubHeading}
                                </PricingSubHeading>
                        </PricingHeadingWrapper>
                    </Col>
                </Row>

                <Row>
                    <Col md="4">
                            <PricingPlanCol>
                                <PricingPlanHeading>{Pricing.PricingPlanCol[0].PricingPlanHeading}</PricingPlanHeading>
                                <PricingPlanImg src={require("../../../assets/"+Pricing.PricingPlanCol[0].PricingPlanImg)} alt=""/>
                                <PricingPlanPrice>{Pricing.PricingPlanCol[0].PricingPlanPrice} / <span>{Pricing.PricingPlanCol[0].PricingPlanPriceSpan}</span></PricingPlanPrice>
                                <PricingPlanLine/>
                                { 
                                    Pricing.PricingPlanCol[0].PricingPlanDarkText.map((itemDark,idxDark) => {
                                        return <PricingPlanDarkText>{itemDark.Text}</PricingPlanDarkText>
                                    })
                                }
                                { 
                                    Pricing.PricingPlanCol[0].PricingPlanLightText.map((itemLight,idxLight) => {
                                        return <PricingPlanLightText>{itemLight.Text}</PricingPlanLightText>
                                    })
                                }
                                <ButtonWrapper>
                                    <PricingPlanBtn href="#">{Pricing.PricingPlanCol[0].PricingPlanBtn}</PricingPlanBtn>
                                </ButtonWrapper>
                            </PricingPlanCol>
                    </Col>
                    <Col md="4">
                            <PricingPlanColCenter>
                                <PricingPlanHeading>{Pricing.PricingPlanCol[1].PricingPlanHeading}</PricingPlanHeading>
                                <PricingPlanImg src={require("../../../assets/"+Pricing.PricingPlanCol[1].PricingPlanImg)} alt=""/>
                                <PricingPlanPrice>{Pricing.PricingPlanCol[1].PricingPlanPrice} / <span>{Pricing.PricingPlanCol[1].PricingPlanPriceSpan}</span></PricingPlanPrice>
                                <PricingPlanLine/>
                                { 
                                    Pricing.PricingPlanCol[1].PricingPlanDarkText.map((itemDark,idxDark) => {
                                        return <PricingPlanDarkText>{itemDark.Text}</PricingPlanDarkText>
                                    })
                                }
                                { 
                                    Pricing.PricingPlanCol[1].PricingPlanLightText.map((itemLight,idxLight) => {
                                        return <PricingPlanLightText>{itemLight.Text}</PricingPlanLightText>
                                    })
                                }
                                <ButtonWrapper>
                                    <PricingPlanBtnCenter href="#">{Pricing.PricingPlanCol[1].PricingPlanBtn}</PricingPlanBtnCenter>
                                </ButtonWrapper>
                            </PricingPlanColCenter>
                    </Col>
                    <Col md="4">
                            <PricingPlanCol>
                                <PricingPlanHeading>{Pricing.PricingPlanCol[2].PricingPlanHeading}</PricingPlanHeading>
                                <PricingPlanImg src={require("../../../assets/"+Pricing.PricingPlanCol[2].PricingPlanImg)} alt=""/>
                                <PricingPlanPrice>{Pricing.PricingPlanCol[2].PricingPlanPrice} / <span>{Pricing.PricingPlanCol[2].PricingPlanPriceSpan}</span></PricingPlanPrice>
                                <PricingPlanLine/>
                                { 
                                    Pricing.PricingPlanCol[2].PricingPlanDarkText.map((itemDark,idxDark) => {
                                        return <PricingPlanDarkText>{itemDark.Text}</PricingPlanDarkText>
                                    })
                                }
                                { 
                                    Pricing.PricingPlanCol[2].PricingPlanLightText.map((itemLight,idxLight) => {
                                        return <PricingPlanLightText>{itemLight.Text}</PricingPlanLightText>
                                    })
                                }
                                <ButtonWrapper>
                                    <PricingPlanBtn href="#">{Pricing.PricingPlanCol[2].PricingPlanBtn}</PricingPlanBtn>
                                </ButtonWrapper>
                            </PricingPlanCol>
                    </Col>
                </Row>
            </Container>
        </PricingWrapper>
    );
}

export default PricingPage;