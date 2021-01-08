import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {FooterSection,FooterCol,FooterTitle,FooterPara,FooterLogo,
    FbIcon,TwitterIcon,LinkedinIcon,InstaIcon,FooterInner,
    FooterUl,FooterLi,FooterMenu,FooterSocial,BottomFooterPara,
    BottomFooterWrapper} from './footer.style';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollSpy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Footer } from '../../../pagedata/App';



const FooterPage = () =>{
   
    return (
        <div>
        <FooterSection>
            <FooterInner>
                <Container>
                    <Row>
                        <Col md="3" sm="6">
                            <FooterCol>
                                <FooterLogo src={require("../../../assets/"+Footer.FooterCol1.FooterLogo)} alt=""/>
                                <FooterPara>
                                {Footer.FooterCol1.FooterPara}
                                </FooterPara>
                                <FooterSocial href="#" aria-label={"Fb Link"}>
                                    <FbIcon/>
                                </FooterSocial>
                                <FooterSocial href="#" aria-label={"Twitter Link"}>
                                    <TwitterIcon/>
                                </FooterSocial>
                                <FooterSocial href="#" aria-label={"Linkedin Link"}>
                                    <LinkedinIcon/>
                                </FooterSocial>
                                <FooterSocial href="#" aria-label={"Instagram Link"}>
                                    <InstaIcon/>
                                </FooterSocial>
                            </FooterCol>
                        </Col>
                        <Col md="3"  sm="6">
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
            </FooterInner>
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