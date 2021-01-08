import React from 'react';
import {AboutSection,AboutRightCol,AboutRightColHeading,AboutLeftImage,
    AboutLeftCol,AboutRightPara,AboutCustomRow} from './about.style';
import {CommonBtn} from '../Common/common.style'
import {Container, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from '../../../pagedata/Restaurant';
const AboutPage =()=>{
    return (
            <AboutSection id="aboutContainer">
                <Container>
                    <AboutCustomRow>
                        <Col md="5">
                            <AboutLeftCol>
                                <AboutLeftImage 
                                    src={require("../../../assets/"+About.AboutLeftImage)} 
                                    alt=""
                                />
                            </AboutLeftCol>
                        </Col>
                        <Col md="7">
                            <AboutRightCol>
                                <AboutRightColHeading>{About.AboutRightColHeading}</AboutRightColHeading>
                                <AboutRightPara>{About.AboutRightPara}</AboutRightPara>
                                <CommonBtn background="#dbdbdb" buttonText={About.CommonBtnLabel} link="#">{About.CommonBtnLabel}</CommonBtn>
                            </AboutRightCol>
                        </Col>
                    </AboutCustomRow>
                </Container>
            </AboutSection>
        )
    }
export default AboutPage;