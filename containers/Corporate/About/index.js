import React from 'react';
import {Container, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AboutSectionSection,AboutLeft,AboutLeftImage,
    AboutRight,AboutHeading,AboutDesc,AboutBtn,AboutRow} from './about.style'
import { About } from '../../../pagedata/Corporate';

const AboutSection = () => {
    return (
        <AboutSectionSection id="aboutContainer">
            <Container>
                <AboutRow>
                    <Col md="6">
                        <AboutLeft>
                            <AboutLeftImage 
                                src={require("../../../assets/"+About.AboutLeftImage)} 
                                alt=""
                                />
                        </AboutLeft>
                    </Col>
                    <Col md="6">
                        <AboutRight>
                            <AboutHeading>{About.AboutHeading}</AboutHeading>
                            <AboutDesc>{About.AboutDesc}</AboutDesc>
                            <AboutBtn href="#">{About.AboutBtn}</AboutBtn>
                        </AboutRight>
                    </Col>
                </AboutRow>
            </Container>
        </AboutSectionSection>
    )
}

export default AboutSection;