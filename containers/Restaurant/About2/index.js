import React from 'react';
import {About2Section,About2RightCol,About2RightColHeading,
    About2LeftCol,About2RightPara,About2CustomRow,About2LeftImage} from './about2.style';
import {CommonBtn} from '../Common/common.style'
import {Container, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { About2 } from '../../../pagedata/Restaurant';
const About2Page =()=>{
        return (
            <About2Section>
                <Container>
                    <About2CustomRow>
                        <Col md="7">
                            <About2RightCol>
                                <About2RightColHeading>{About2.About2RightColHeading}</About2RightColHeading>
                                <About2RightPara>{About2.About2RightPara}</About2RightPara>
                                <CommonBtn background="#dbdbdb" buttonText={About2.CommonBtnLabel} link="#">{About2.CommonBtnLabel}</CommonBtn>
                            </About2RightCol>
                        </Col>
                        <Col md="5">
                            <About2LeftCol>
                                <About2LeftImage 
                                    src={require("../../../assets/"+About2.About2LeftImage)} 
                                    alt=""
                                />
                            </About2LeftCol>
                        </Col>
                    </About2CustomRow>
                </Container>
            </About2Section>
        )
    }
export default About2Page;