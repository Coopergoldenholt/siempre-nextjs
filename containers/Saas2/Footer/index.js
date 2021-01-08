import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {FooterSection,FooterCol,FooterTitle,FooterPara,
    FooterLi,FooterSocial,BottomFooterPara,BottomFooterRight,
    FooterAddWrapper,FooterAddLeft,FooterAddRight,FooterAddImg,FooterAddText,
    BottomFooterWrapper,FooterLogo,FbIcon,TwitterIcon,LinkedinIcon,
    InstaIcon} from './footer.style';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollSpy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Footer } from '../../../pagedata/Saas2';

const FooterPage = () =>{
    return (
        <div>
        <FooterSection>
            <Container>
                <Row>
                    <Col md="3">
                        <FooterCol>
                            <FooterLogo src={require("../../../assets/"+Footer.FooterLogo)} alt=""/>
                        </FooterCol>
                    </Col>
                    <Col md="3">
                        <FooterCol>
                            <FooterTitle>{Footer.FooterCol2.FooterTitle}</FooterTitle>
                            {
                                Footer.FooterCol2.FooterPara.map((item,idx) => {
                                return <FooterPara>
                                    {item.Para}
                                    </FooterPara>
                                })
                            }
                        </FooterCol>
                    </Col>
                    <Col md="3">
                        <FooterCol>
                            <FooterTitle>{Footer.FooterCol3.FooterTitle}</FooterTitle>
                            <ScrollSpy offset={-59} items={Footer.Items} currentClassName="is-current">
                            {
                                Footer.FooterCol3.FooterUl.map((item,idx) => {
                                return <FooterLi>
                                    <AnchorLink offset={55} href={item.Href}>
                                        {item.FooterMenu}
                                    </AnchorLink>
                                </FooterLi>
                                })
                            }
                            </ScrollSpy>
                        </FooterCol>
                    </Col>
                    <Col md="3">
                        <FooterCol>
                            <FooterTitle>{Footer.FooterCol4.FooterTitle}</FooterTitle>
                            {
                                Footer.FooterCol4.FooterAddWrapper.map((item,idx) => {
                                return <FooterAddWrapper>
                                        <FooterAddLeft>
                                            <FooterAddImg src={require("../../../assets/"+item.FooterAddImg)} alt=""/>
                                        </FooterAddLeft>
                                        <FooterAddRight>
                                            <FooterAddText>
                                            {item.FooterAddText}
                                            </FooterAddText>
                                        </FooterAddRight>
                                    </FooterAddWrapper>
                                })
                            }
                        </FooterCol>
                    </Col>
                </Row>
            </Container>
        </FooterSection>
        <BottomFooterWrapper>
            <Container>
                <Row>
                    <Col md="6">
                        <BottomFooterPara>
                        {Footer.BottomFooterPara}
                        </BottomFooterPara>
                    </Col>
                    <Col md="6">
                        <BottomFooterRight>
                        <FooterSocial href="#" aria-label="Facebook Link">
                            <FbIcon/>
                        </FooterSocial>
                        <FooterSocial href="#" aria-label="Twitter Link">
                            <TwitterIcon/>
                        </FooterSocial>
                        <FooterSocial href="#" aria-label="Linkedin Link">
                            <LinkedinIcon/>
                        </FooterSocial>
                        <FooterSocial href="#" aria-label="Instagram Link">
                            <InstaIcon/>
                        </FooterSocial>
                        </BottomFooterRight>
                    </Col>
                </Row>
            </Container>
        </BottomFooterWrapper>
        </div>
    );
}

export default FooterPage;