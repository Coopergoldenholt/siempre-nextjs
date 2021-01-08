import React from 'react';
import {PricingSection,PricingHeadingWrapper,PricingSubHeading,PricingInner,
    PricingHeading,PricingPlanCol,PricingPlanImg,PricingPlanHeading,PricingPlanPrice,
    PricingPlanLine,PricingPlanBtn,PricingPlanLightText,PricingPlanDarkText,PricingPlanColCenter,PricingCustomRow,
    PricingPlanBtnCenter,PricingCol
} from './pricing.style';
import {Container, Row, Col} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Pricing } from '../../../pagedata/App';

const PricingPage = () =>{
    return (
        <PricingSection id="pricingContainer">
            <PricingInner>
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

                        <PricingCustomRow>
                            <PricingCol>
                                <PricingPlanCol index={0}>
                                    <PricingPlanImg src={require("../../../assets/"+Pricing.PricingCustomRow[0].PricingPlanImg)} alt=""/>
                                    <PricingPlanHeading>{Pricing.PricingCustomRow[0].PricingPlanHeading}</PricingPlanHeading>
                                    <PricingPlanLine/>
                                    <PricingPlanPrice>{Pricing.PricingCustomRow[0].PricingPlanPrice} / <span>{Pricing.PricingCustomRow[0].PricingPlanPriceSpan}</span></PricingPlanPrice>
                                    { 
                                        Pricing.PricingCustomRow[0].PricingPlanDarkText.map((itemDark,idxDark) => {
                                            return <PricingPlanDarkText>{itemDark.Text}</PricingPlanDarkText>
                                        })
                                    }
                                    { 
                                        Pricing.PricingCustomRow[0].PricingPlanLightText.map((itemLight,idxLight) => {
                                            return <PricingPlanLightText>{itemLight.Text}</PricingPlanLightText>
                                        })
                                    }
                                    <PricingPlanBtn href="#">{Pricing.PricingCustomRow[0].PricingPlanBtn}</PricingPlanBtn>
                                </PricingPlanCol>
                            </PricingCol>

                            <PricingCol>
                                <PricingPlanColCenter>
                                    <PricingPlanImg src={require("../../../assets/"+Pricing.PricingCustomRow[1].PricingPlanImg)} alt=""/>
                                    <PricingPlanHeading>{Pricing.PricingCustomRow[1].PricingPlanHeading}</PricingPlanHeading>
                                    <PricingPlanLine/>
                                    <PricingPlanPrice>{Pricing.PricingCustomRow[1].PricingPlanPrice} / <span>{Pricing.PricingCustomRow[1].PricingPlanPriceSpan}</span></PricingPlanPrice>
                                    { 
                                        Pricing.PricingCustomRow[1].PricingPlanDarkText.map((itemDark,idxDark) => {
                                            return <PricingPlanDarkText>{itemDark.Text}</PricingPlanDarkText>
                                        })
                                    }
                                    { 
                                        Pricing.PricingCustomRow[1].PricingPlanLightText.map((itemLight,idxLight) => {
                                            return <PricingPlanLightText>{itemLight.Text}</PricingPlanLightText>
                                        })
                                    }
                                    <PricingPlanBtnCenter href="#">{Pricing.PricingCustomRow[1].PricingPlanBtn}</PricingPlanBtnCenter>
                                </PricingPlanColCenter>
                            </PricingCol>

                            <PricingCol>
                                <PricingPlanCol index={2}>
                                    <PricingPlanImg src={require("../../../assets/"+Pricing.PricingCustomRow[2].PricingPlanImg)} alt=""/>
                                    <PricingPlanHeading>{Pricing.PricingCustomRow[2].PricingPlanHeading}</PricingPlanHeading>
                                    <PricingPlanLine/>
                                    <PricingPlanPrice>{Pricing.PricingCustomRow[2].PricingPlanPrice} / <span>{Pricing.PricingCustomRow[2].PricingPlanPriceSpan}</span></PricingPlanPrice>
                                    { 
                                        Pricing.PricingCustomRow[2].PricingPlanDarkText.map((itemDark,idxDark) => {
                                            return <PricingPlanDarkText>{itemDark.Text}</PricingPlanDarkText>
                                        })
                                    }
                                    { 
                                        Pricing.PricingCustomRow[2].PricingPlanLightText.map((itemLight,idxLight) => {
                                            return <PricingPlanLightText>{itemLight.Text}</PricingPlanLightText>
                                        })
                                    }
                                    <PricingPlanBtn href="#">{Pricing.PricingCustomRow[2].PricingPlanBtn}</PricingPlanBtn>
                                </PricingPlanCol>
                            </PricingCol>

                        </PricingCustomRow>
                </Container>
            </PricingInner>
        </PricingSection>
    );
}

export default PricingPage;