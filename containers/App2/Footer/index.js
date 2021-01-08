import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FooterWrapper,FooterCol,FooterTitle,FooterPara,FooterLogo,
    FooterUl,FooterLi,FooterMenu,FooterSocial,BottomFooterPara,InstagramIcon,YoutubeIcon,TwitterIcon,FacebookIcon,
    BottomFooterWrapper} from './footer.style';

import ScrollSpy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Footer } from '../../../pagedata/App2';
    
    
const FooterPage = () =>{
        return (
        <div>
        <FooterWrapper>
            <Container>
                    <Row>
                        <Col md="3" sm="6">
                            <FooterCol>
                                <FooterLogo src={require("../../../assets/"+Footer.FooterCol1.FooterLogo)} alt=""/>
                                <FooterPara>
                                {Footer.FooterCol1.FooterPara}
                                </FooterPara>
                                <FooterSocial href="#" aria-label="Instagram Link">
                                    <InstagramIcon/>
                                </FooterSocial>

                                <FooterSocial href="#" aria-label="Youtube Link">
                                    <YoutubeIcon/>
                                </FooterSocial>

                                <FooterSocial href="#" aria-label="Twitter Link">
                                    <TwitterIcon/>
                                </FooterSocial>

                                <FooterSocial href="#" aria-label="Facebook Link">
                                    <FacebookIcon/>
                                </FooterSocial>
                            </FooterCol>
                        </Col>
                        <Col md="3" sm="6">
                            <FooterCol>
                                <FooterTitle>{Footer.FooterCol2.FooterTitle}</FooterTitle>
                                <FooterPara>
                                    {Footer.FooterCol2.FooterPara}
                                </FooterPara>
                            </FooterCol>
                        </Col>
                        <Col md="3" sm="6">
                            <FooterCol>
                            <FooterTitle>{Footer.FooterCol3.FooterTitle}</FooterTitle>
                                <FooterUl>
                                {
                                    Footer.FooterCol3.FooterUl.map((item,idx) => {
                                    return <FooterLi>
                                        <FooterMenu href="#">
                                            {item.FooterMenu}
                                        </FooterMenu>
                                    </FooterLi>
                                    })
                                }
                                </FooterUl>
                            </FooterCol>
                        </Col>
                        <Col md="3" sm="6">
                            <FooterCol>
                            <FooterTitle>{Footer.FooterCol4.FooterTitle}</FooterTitle>
                                <ScrollSpy offset={-59} items={Footer.Items} currentClassName="is-current">
                                {
                                    Footer.FooterCol4.FooterUl.map((item,idx) => {
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
                    </Row>
            </Container>
        </FooterWrapper>

        <BottomFooterWrapper>
            <Container>
                    <Row>
                        <Col md="12">
                            <BottomFooterPara>
                            {Footer.BottomFooterPara}
                            </BottomFooterPara>
                        </Col>
                    </Row>
            </Container>
                    
        </BottomFooterWrapper>

        
    </div>
    );
}

export default FooterPage;