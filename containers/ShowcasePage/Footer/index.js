import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FooterWrapper,FooterCol,FooterTitle,FooterPara,
    FooterLi,FooterSocial,BottomFooterPara,BottomFooterLeft,
    BottomFooterWrapper,FooterLogo,FbIcon,TwitterIcon,LinkedinIcon,
    InstaIcon} from './footer.style';
import ScrollSpy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Footer } from '../../../pagedata/Showcase';


const FooterPage = () =>{
    return (
        <div>
        <FooterWrapper>
            <Container>
                <Row>
                    <Col md="4">
                        <FooterCol>
                            <FooterLogo src={require("../../../assets/"+Footer.FooterLogo)} alt=""/>
                            <BottomFooterLeft>
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
                            </BottomFooterLeft>
                    
                        </FooterCol>
                    </Col>
                    <Col md="4">
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
                    {/* <Col md="3" sm="6">
                        <FooterCol>
                            <FooterTitle>{Footer.FooterCol3.FooterTitle}</FooterTitle>
                            {
                                Footer.FooterCol3.FooterPara.map((item,idx) => {
                                return <FooterPara>
                                    {item.Para}
                                    </FooterPara>
                                })
                            }
                        </FooterCol>
                    </Col> */}
                    <Col md="4">
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