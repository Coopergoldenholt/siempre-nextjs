import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {FooterCustomContainerfluid,FooterSection,FooterCol,FooterTitle,FooterPara,
    FooterLi,FooterSocial,BottomFooterPara,InstaIcon,LinkedinIcon,TwitterIcon,FbIcon,
    BottomFooterWrapper} from './footer.style';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollSpy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Footer } from '../../../pagedata/Hosting';
const FooterPage = () =>{
        return (
        <div>
            <FooterCustomContainerfluid>
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
                                                        {item.Menu}
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
            </FooterCustomContainerfluid>
        </div>
    );
}

export default FooterPage;