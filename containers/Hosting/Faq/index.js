import React from 'react';
import {Container, Row, Col } from "react-bootstrap";
import {FaqSection,FaqHeadingWrapper,FaqSectionHeading,
    FaqAccordianWrapper} from './faq.style'
import AccordianCustom from './AccordianCustom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FAQ } from '../../../pagedata/Hosting';
const FaqPage =()=>{
    return (
        <FaqSection>
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
        </FaqSection>
    );
}
export default FaqPage;