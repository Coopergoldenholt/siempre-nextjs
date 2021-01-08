import React from 'react';
import {AboutSection,AboutRight,AboutLeft,AboutCardImg,
    AboutRightH3,AboutRightPara,AboutRightBtn,AboutRow,AboutImg
} from './about.style';
import {Container, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImageText } from '../../../pagedata/Corporate2';
const ImageTextPage = () => {
    return (
        <AboutSection id="imageTextContainer">
            <Container>
                <AboutRow>
                    <Col md="12" lg="7">
                        <AboutLeft>
                                <AboutCardImg>
                                    <AboutImg 
                                        src={require("../../../assets/"+ImageText.AboutCardIcon)} 
                                        alt=""
                                    />
                                </AboutCardImg>
                        </AboutLeft>
                    </Col>
                    <Col md="12" lg="5">
                        <AboutRight>
                                <AboutRightH3>{ImageText.AboutRight.AboutRightH3}</AboutRightH3>
                                <AboutRightPara>{ImageText.AboutRight.AboutRightPara}</AboutRightPara>
                                <AboutRightBtn href="#">{ImageText.AboutRight.AboutRightBtn}</AboutRightBtn>
                        </AboutRight>
                    </Col>
                </AboutRow>
            </Container>
        </AboutSection>
    );
}

export default ImageTextPage;