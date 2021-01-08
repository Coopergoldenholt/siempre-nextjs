import React from 'react';
import {Container,Row,Col} from "react-bootstrap";;
import {FooterWrapper,FooterCol,FooterTitle,FooterPara,
    FooterUlWrapper,FooterLi,FooterSocial,BottomFooterPara,FbIcon,TwitterIcon,LinkedinIcon,
    InstaIcon,BottomFooterWrapper,YTIcon} from './footer.style';
import ScrollSpy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../../../pagedata/Corporate';


const FooterPage = () =>{
        return (
        <div>
        <FooterWrapper>
            <Container>
                    <Row>
                        <Col md="6">
                        
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
                                <FooterUlWrapper>
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
                                </FooterUlWrapper>
                            </FooterCol>
                        </Col>
                        <Col md="3">
                            <FooterCol>
                                {/* <FooterTitle>{Footer.FooterCol4.FooterTitle}</FooterTitle> */}
                                <FooterTitle>{Footer.FooterCol1.FooterTitle}</FooterTitle>
                                {
                                    Footer.FooterCol1.FooterPara.map((item,idx) => {
                                    return <FooterPara>
                                        {item.Para}
                                        </FooterPara>
                                    })
                                }
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
                                <FooterSocial href="#" aria-label="Youtube Link">
                                    <YTIcon/>
                                </FooterSocial>
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