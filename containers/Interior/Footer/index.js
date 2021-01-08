import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {FooterSection,FooterCol,FooterTitle,FooterPara,FooterForm,FooterInput,FooterFormSubmit,
    FooterLi,FooterSocial,BottomFooterPara,
    FbIcon,TwitterIcon,LinkedinIcon,InstaIcon} from './footer.style';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../../../pagedata/Interior';

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
                                <FooterTitle>{Footer.FooterCol3.FooterTitle}</FooterTitle>
                                {
                                    Footer.FooterCol3.FooterPara.map((item,idx) => {
                                    return <FooterPara>
                                        {item.Para}
                                        </FooterPara>
                                    })
                                }
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
                            <Col md="3">
                                <FooterCol>
                                    <FooterTitle>Free Consultation</FooterTitle>
                                    <FooterForm>
                                        <FooterInput type="email" placeholder="Email ID"/>
                                        <FooterFormSubmit>Submit</FooterFormSubmit>
                                    </FooterForm>
                                </FooterCol>
                                <FooterCol>
                                    <FooterSocial href="#" aria-label="Facebook Link">
                                        <FbIcon/>
                                    </FooterSocial>
                                    <FooterSocial href="#" aria-label="Twitter Link">
                                        <TwitterIcon/>
                                    </FooterSocial>
                                    <FooterSocial href="#" aria-label="LinkedIn Link">
                                        <LinkedinIcon/>
                                    </FooterSocial>
                                    <FooterSocial href="#" aria-label="Instagram Link">
                                        <InstaIcon/>
                                    </FooterSocial>
                                </FooterCol>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <BottomFooterPara>
                                {Footer.BottomFooterPara}
                                </BottomFooterPara>
                            </Col>
                        </Row>
                </Container>
            </FooterSection>
        </div>
    )
};

export default FooterPage;