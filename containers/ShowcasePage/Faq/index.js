import React from 'react';
import {Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaqWrapper,FaqHeadingWrapper,FaqSectionHeading,
    FaqAccordianWrapper} from './faq.style'
import AccordianCustom from './AccordianCustom';
import { FAQ } from '../../../pagedata/Showcase';
  
const FaqPage =()=>{
    return (
        <FaqWrapper>
            <Container>
                <FaqHeadingWrapper>
                    <Row>
                        <Col md="12">
                                <FaqSectionHeading>{FAQ.FaqSectionHeading}</FaqSectionHeading>
                        </Col>
                    </Row>
                </FaqHeadingWrapper>
                    <FaqAccordianWrapper>
                        <Row>
                            <Col md="12">
                            {
                                FAQ.AccordianCustom.map((item,idx) => {
                                return <AccordianCustom 
                                    title={item.title}
                                    description= {item.description} 
                                />
                                })
                            }
                            </Col>
                        </Row>
                    </FaqAccordianWrapper>
            </Container>
        </FaqWrapper>
    );
}
export default FaqPage;