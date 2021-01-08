import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {FooterSection,FooterCol,FooterTitle,FooterPara,FbIcon,TwitterIcon,LinkedinIcon,
    InstaIcon,FooterUl,FooterLi,FooterMenu,FooterSocial,BottomFooterPara,
    BottomFooterWrapper} from './footer.style';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../../../pagedata/Restaurant';
const FooterPage = () =>{
    return (
            <div>
            <FooterSection>
                <Container>
                    <Row>
                        <Col md="3">
                            <FooterCol>
                                <FooterTitle>{Footer.FooterCol1.FooterTitle}</FooterTitle>
                                {
                                    Footer.FooterCol1.FooterPara.map((item,idx) => {
                                    return <FooterPara>
                                    {item.Para}
                                    </FooterPara>
                                    })
                                }
                            </FooterCol>
                        </Col>
                        <Col md="3">
                            <FooterCol>
                                <FooterTitle>{Footer.FooterCol2.FooterTitle}</FooterTitle>
                                <Row>
                                    <Col lg="4">
                                        <FooterUl>
                                        {
                                            Footer.FooterCol2.FooterUl1.map((item,idx) => {
                                            return <FooterLi>
                                                <FooterMenu href="#">
                                                    {item.FooterMenu}
                                                </FooterMenu>
                                            </FooterLi>
                                            })
                                        }
                                        </FooterUl>
                                    </Col>
                                    <Col lg="8">
                                        <FooterUl>
                                        {
                                            Footer.FooterCol2.FooterUl2.map((item,idx) => {
                                            return <FooterLi>
                                                <FooterMenu href="#">
                                                {item.FooterMenu}
                                                </FooterMenu>
                                            </FooterLi>
                                            })
                                        }
                                        </FooterUl>
                                    </Col>
                                </Row>
                            </FooterCol>
                        </Col>
                        <Col md="3">
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
                        <Col md="3">
                            <FooterCol>
                                <FooterTitle>{Footer.FooterCol4.FooterTitle}</FooterTitle>
                                <FooterSocial href="#" aria-label="FB Footer Link">
                                    <FbIcon/>
                                </FooterSocial>
                                <FooterSocial href="#" aria-label="Twitter Footer Link">
                                    <TwitterIcon/>
                                </FooterSocial>
                                <FooterSocial href="#" aria-label="LinkedIn Footer Link">
                                    <LinkedinIcon/>
                                </FooterSocial>
                                <FooterSocial href="#" aria-label="Instagram Footer Link">
                                    <InstaIcon/>
                                </FooterSocial>
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
        )
                    }

export default FooterPage;