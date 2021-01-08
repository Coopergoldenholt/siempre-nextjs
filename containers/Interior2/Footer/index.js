import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {FooterSection,FooterCol,FooterTitle,FooterPara,FooterLogo,
    FooterUl,FooterLi,FooterMenu,FooterSocial,BottomFooterPara,
    FbIcon,TwitterIcon,LinkedinIcon,InstaIcon, 
    BottomFooterWrapper} from './footer.style';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../../../pagedata/Interior2';
import ScrollSpy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';

    
const FooterPage = () =>{
    return (
        <div>
        <FooterSection>
            <Container>
                <Row>
                    <Col md="3">
                        <FooterCol>
                            <FooterLogo src={require("../../../assets/"+Footer.FooterCol1.FooterLogo)} alt=""/>
                            {
                                Footer.FooterCol1.FooterPara.map((item,idx) => {
                                return <FooterPara>
                                    {item.Para}
                                    </FooterPara>
                                })
                            }
                            <FooterSocial href="#" aria-label="Social Link">
                                <FbIcon/>
                            </FooterSocial>
                            <FooterSocial href="#" aria-label="Social Link">
                                <TwitterIcon/>
                            </FooterSocial>
                            <FooterSocial href="#" aria-label="Social Link">
                                <LinkedinIcon/>
                            </FooterSocial>
                            <FooterSocial href="#" aria-label="Social Link">
                                <InstaIcon/>
                            </FooterSocial>
                                
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
                                <FooterUl>
                                    {
                                        Footer.FooterCol3.FooterUl.map((item,idx) => {
                                            return <FooterLi>
                                                <FooterMenu>
                                                    {item.FooterMenu}
                                                </FooterMenu>
                                            </FooterLi>
                                        })
                                    }
                                </FooterUl>
                        </FooterCol>
                    </Col>
                    <Col md="3">
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
        </FooterSection>
        
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