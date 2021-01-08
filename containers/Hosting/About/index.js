import React from 'react';
import {Container, Col} from "react-bootstrap";
import {AboutSection,AboutLeft,AboutLeftImage,
    AboutRight,AboutHeading,AboutDesc,AboutBtn,AboutRow} from './about.style'
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from '../../../pagedata/Hosting';
const AboutPage = () => {
    return (
        <AboutSection id="aboutContainer">
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
        </AboutSection>
    )
}

export default AboutPage;