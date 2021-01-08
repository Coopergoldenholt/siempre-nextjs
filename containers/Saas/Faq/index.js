import React from 'react';
import {Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaqSection,FaqHeadingWrapper,FaqSectionHeading,FaqSectionSubHeading,
    FaqAccordianWrapper} from './faq.style'
import AccordianCustom from './AccordianCustom';
import { FAQ } from '../../../pagedata/Saas';
  
const FaqPage =()=>{
    return (
        <FaqSection>
            <Container>
                <FaqHeadingWrapper>
                    <Row>
                        <Col md="12">
                                <FaqSectionHeading>{FAQ.FaqSectionHeading}</FaqSectionHeading>
                                <FaqSectionSubHeading>
                                {FAQ.FaqSectionSubHeading}
                                </FaqSectionSubHeading>
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